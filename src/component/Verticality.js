import styled from "styled-components";

const VerticalityContainer = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid green;
`

function Verticality({ children }){
  return(
    <VerticalityContainer>{ children }</VerticalityContainer>
  )
}

export default Verticality;