import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  top: ${props => props.scroll ? `-10rem` : '0'};
  width: 100vw;
  border: 2px solid red;
  background-color: var(--bg-color);
  padding: 0 6.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 500;
  transition: 0.5s;
`

const ContentContainer = styled.div`
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
`

const Title = styled.div`

`

const PageControllers = styled.div`
  border: 2px solid green;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
`

const Menus = styled.div`

`

const User = styled.div`

`
const Search = styled.div`

`
const Menu = styled.div`

`


function Header({scroll}){
  return(
    <HeaderContainer scroll={scroll}>

      <ContentContainer>
        <Title>Kodex</Title>
        <PageControllers>
          <div className="">kodexETF</div>
          <div className="">삼성펀드</div>
        </PageControllers>
      </ContentContainer>

      <ContentContainer>
        <Menus>ETF 상품</Menus>
        <Menus>인사이트</Menus>
        <Menus>고객라운지</Menus>
        <Menus>회사소개</Menus>
      </ContentContainer>

      <ContentContainer>
        <User>사람</User>
        <Search>돋보기</Search>
        <Menu>메뉴</Menu>
      </ContentContainer>
      
    </HeaderContainer>
  )
}

export default Header;

// **HeaderContainer**

// **Title**

// **PageControllers**

// **MenuContainer**

// **Menus**

// **ControllerContainer**

// **User**

// **Search**

// **Menu**