import styled from "styled-components";

const CarousalSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // 전체 크기 나누기 슬라이드 갯수 = 슬라이드 너비
  width: calc(100% / ${({length}) => length});
  height: 100%;

  border: 1px solid gray;
`

function CarousalSlide({ children, length }){
  return(
    <CarousalSlideContainer length={length}>
      {children}
    </CarousalSlideContainer>
  )
}

export default CarousalSlide;