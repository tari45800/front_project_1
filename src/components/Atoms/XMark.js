import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

const XMarkContainer = styled.span`
  margin: 0;
  cursor: pointer;
`

function XMark({func = () => { console.log('전달 된 x버튼 기능 없음') }}) {
  return (
    <XMarkContainer onClick={() => {func()}}>
      <GrFormClose></GrFormClose>
    </XMarkContainer>
  )

}

export default XMark;