import styled from "styled-components";

const CarouselWindowContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`

function CarouselWindow({ children }){
  return(
    <CarouselWindowContainer>
      { children }
    </CarouselWindowContainer>
  )
}

export default CarouselWindow;
