import styled from "styled-components";

const TagButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  // content의 크기만큼 너비를 차지하는 코드
  width: fit-content;
  // content가 한글일 경우 줄바꿈이 생기는 것을 방지하는 코드
  white-space: nowrap;

  // 구조 분해 할당을 활용한 styled-components프롭스 
  padding: ${({ fontSize }) => fontSize / 2}rem ${({ fontSize }) => fontSize}rem;
  font-size: ${({ fontSize }) => fontSize}rem;
  border-radius: ${({ fontSize }) => fontSize * 2}rem;
  background-color: ${({ bg }) => bg};

  cursor: pointer;
`;

function TagButton({children, fontSize, bg, content, func = () => { console.log('전달 된 태그 기능 없음') } }) {
  return (
    <TagButtonContainer fontSize={fontSize} bg={bg} onClick={func}>
      <span>{content}</span>
      {children}
    </TagButtonContainer>
  );
}

export default TagButton;
