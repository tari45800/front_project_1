import styled from "styled-components";

const CarouselButtonContainer = styled.button`
  font-size: 2rem;
  font-weight: bold;

  border: none;
  background-color: transparent;

  cursor: pointer;
`

function CarouselButton({children, dr, func }){

  return(
    <CarouselButtonContainer onClick={()=>{func(dr)}}>
      {children}
    </CarouselButtonContainer>
  )
}

export default CarouselButton;
