import styled from "styled-components";
import MainComponent from "../component/MainComponent";
import Horizontal from "../component/Horizontal";
import Verticality from "../component/Verticality";
import { useState } from "react";

const CarouselContainer = styled.div`
`
const CarouselWindow = styled.div`
`
const CarousalSlideBax = styled.div`
  position: relative;
  left: ${props => props.currentSlide * -100}vh;
  /* left: -200vh; */
  border: 2ps solid gray;
  width: 400vw;
  display: flex;
  transition: ${props => props.onTransition ? `0.5s` : `none`} ;
`
const CarousalSlide = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  height: 660px;
  padding: 10px;

`

const CarouselController = styled.div`
  border: 2px solid green;
  width: 300px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DotContainer = styled.div`
  display: flex;
  margin: 1rem;
`
const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: gray;
`
const Button = styled.div`
  font-size: 2rem;
  cursor: pointer;
`

function Carousel(){

  const [currentSlide, setSlide] = useState(1)
  const [onTransition, setTransition] = useState(true)

  const fakeMove = () => {
    if(currentSlide <= 0){
      setTransition(false)
      setSlide(2)
      return
    }

    if(currentSlide >= 3){
      setTransition(false)
      setSlide(1)
      return

    }
  }
  
  const handlePrevClick = () => {
    fakeMove()
    setTransition(true)
    setSlide((prevSlide) => prevSlide - 1);
  };
  
  const handleNextClick = () => {
    fakeMove()
    setTransition(true)
    setSlide((prevSlide) => prevSlide + 1);
  };
  
  console.log(currentSlide)

  return(
    <CarouselContainer >

      <CarouselWindow>
        <CarousalSlideBax currentSlide={currentSlide} onTransition={onTransition}>

          <CarousalSlide>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <MainComponent />
            </Horizontal>
          </CarousalSlide>

          <CarousalSlide>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <Verticality>
                <MainComponent />
                <MainComponent />
              </Verticality>
            </Horizontal>
          </CarousalSlide>

          <CarousalSlide>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <MainComponent />
            </Horizontal>
          </CarousalSlide>

          <CarousalSlide>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <Verticality>
                <MainComponent />
                <MainComponent />
              </Verticality>
            </Horizontal>
          </CarousalSlide>

        </CarousalSlideBax>
      </CarouselWindow>

      <CarouselController>
        <Button onClick={handlePrevClick}>&lt;</Button>
        <DotContainer>
          <Dot></Dot>
          <Dot></Dot>
        </DotContainer>
        <Button onClick={handleNextClick}>&gt;</Button>
      </CarouselController>

    </CarouselContainer>
  )
}

export default Carousel;

