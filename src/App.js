import { GlobalStyles } from "./layout/GlobalStyles";
import styled from "styled-components";
import Header from "./layout/HeaderPage";
import TagBox from "./components/Molecules/TagBox";
import TagForm from "./components/Organisms/TagForm";
import { useState, useEffect } from "react";
import Carousel from "./components/Organisms/Carousel";


const Main = styled.div`
  background-color: var(--bg-color);
  height: 200vh;
  .header{
    height: 10rem;
  }
`

function App() {

  const [isScroll, setScroll] = useState(false)

    useEffect(() => {

      const handleScroll = () => {
        const scroll = window.pageYOffset;
        
        if(scroll >= 100){
          console.log('여기여')
          setScroll(true)
        } else {
          console.log('저기여')
          setScroll(false)
        }
    
      }
    
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


const MainCC = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: pink;
`
  return (
    <Main>
      <GlobalStyles></GlobalStyles>
      <div className="header">
        <Header scroll={isScroll}></Header> 
      </div>
      {/*
      <Carousel></Carousel>
      <Carousel contentList={[<MainCC />, 2, 3, 4, 5, 6, 7, 8]} contentNumber={1} contentwidth={100} contentheight={30} contentDot={true}></Carousel> */}
    </Main>
  );
}

export default App;
