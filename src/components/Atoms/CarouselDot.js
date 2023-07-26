import styled from "styled-components";

const CarouselDotContainer = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: gray;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
  cursor: pointer;
`

function CarouselDot({idx, func}){
  return(
    <CarouselDotContainer onClick={() => (func(idx))}>

    </CarouselDotContainer>
  )
}

export default CarouselDot;
