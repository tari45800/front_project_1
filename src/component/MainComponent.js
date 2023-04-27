import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background-color: ${props => props.color || 'gray'};
  flex: 1; /* 각 요소가 같은 너비를 갖도록 설정 */

`
const Theme = styled.div`

`
const Title = styled.div`

`
const SubTitle = styled.div`

`
const Image = styled.div`

`

function MainComponent({theme, title, subTitle, image, color}){
  return(
    <MainContainer bg={color}>
      <div>{theme}</div>
      <div>{title}</div>
      <div>{subTitle}</div>
    </MainContainer>
  )
}

export default MainComponent;