import styled from "styled-components";

const CarousalSlideBaxContainer = styled.div`
  height: 100%;
  // 슬라이드 하나의 크기 * 슬라이드 갯수 = 컨테이너 너비
  width: calc(${({width}) => width}% * ${({length}) => length});
  display: flex;
  position: relative;
  // 현재 위치 스테이트 * 이동 너비 = 현재 슬라이드
  left: ${({currentBanner, move}) => -currentBanner * move}%;
  transition: ${({transitionTime}) => transitionTime}s;
`

function CarousalSlideBax({ children, width, length, currentBanner, move, transitionTime,} ){
  return(
    <CarousalSlideBaxContainer width={width} length={length} currentBanner={currentBanner} move={move} transitionTime={transitionTime}  >
      { children }
    </CarousalSlideBaxContainer>
  )
}

export default CarousalSlideBax;
