import styled from "styled-components";

const HorizontalContainer = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  border: 2px solid blue;
`

function Horizontal({ children }){
  return(
    <HorizontalContainer>{ children }</HorizontalContainer>
  )
}

export default Horizontal;