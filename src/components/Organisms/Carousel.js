import styled from "styled-components";
import CarouselWindow from "../Atoms/CarouselWindow";
import CarousalSlide from "../Atoms/CarousalSlide";
import CarousalSlideBax from "../Atoms/CarousalSlideBax";
import CarouselButton from "../Atoms/CarouselButton";
import CarouselDot from "../Atoms/CarouselDot";
import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";


const CarouselContainer = styled.div`
  position: relative;
  max-width: ${({contentwidth}) => contentwidth}rem;
  width: 100%;
  height: ${({contentheight}) => contentheight}rem;
  margin: 0 auto;
`

const CarouselController = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  width: 100%;
  height: ${({contentheight}) => contentheight}rem;

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function Carousel({contentList, contentNumber, contentwidth, contentheight, contentMove, contentDot}){

  // 몇개의 슬라이드를 보여주고 싶나여
  const slide = contentNumber;

  // 시작하고 싶은 슬라이드 입력
  const [currentBanner, setCurrentBanner] = useState(slide);

  // 트렌지션을 관리하는 스테이트
  const [transitionTime, setTransitionTime] = useState(0.5);

  // 원본 콘텐츠
  const original = contentList;
  
  // 수정 콘텐츠
  const content = [...original.slice(original.length-slide, original.length), ...original, ...original.slice(0, slide)];

  // 컨텐츠 너비 규격
  const num = {
    "1": 100,
    "2": 50,
    "3": 33.33,
    "4": 25,
    "5": 20,
  }
  // 컨텐츠 너비
  const width = num[slide];

  // 슬라이드 이동 너비
  const move = num[contentMove || slide];

  // 슬라이드 이동 함수
  const changeBanner = (dr) => {

    const replaceSlide = (index) => {
      setTimeout(() => {
        setTransitionTime(0);
        setCurrentBanner(index);
      }, 500)
    }

    if(dr === 'right'){
      setCurrentBanner(prev => {  
        setTransitionTime(0.5);
        if(prev >= content.length-slide-1){
          replaceSlide(slide)
        }
        return prev + 1
      });

    } else if(dr === 'left'){
      setCurrentBanner(prev => {
        setTransitionTime(0.5);
        if(prev <= 1){
          replaceSlide(content.length-slide-1)
        }
        return prev - 1
      });
    }
  }

  const clickDot = (idx) => {
    setCurrentBanner(idx)
  }


  return(
    <CarouselContainer contentwidth={contentwidth} contentheight={contentheight}>

      <CarouselWindow>
        <CarousalSlideBax currentBanner={currentBanner} move={move} transitionTime={transitionTime} width={width} content={content} length={content.length}>
          {content.map((el, idx) => <CarousalSlide key={idx} length={content.length}>{el}</CarousalSlide>)}
        </CarousalSlideBax>
      </CarouselWindow>

      <CarouselController contentheight={contentheight}>
        <Container></Container>
        <ButtonContainer>
          <CarouselButton width={width} dr='left' func={changeBanner}><AiFillCaretLeft /></CarouselButton>
          <CarouselButton width={width} dr='right' func={changeBanner}><AiFillCaretRight /></CarouselButton>
        </ButtonContainer>
        <Container>
          {contentDot && original.map((el, idx) => <CarouselDot key={idx} idx={idx+slide} func={clickDot} ></CarouselDot>)}
        </Container>
      </CarouselController>

    </CarouselContainer>
  )
}

export default Carousel;
