import { GlobalStyles } from "./layout/GlobalStyles";
import styled from "styled-components";
import Header from "./layout/HeaderPage";
import Carousel from "./layout/CarouselPage";
import { useState, useEffect } from "react";


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




  return (
    <Main>
      <GlobalStyles></GlobalStyles>
      <div className="header">
        <Header scroll={isScroll}></Header> 
      </div>
      <Carousel></Carousel>
    </Main>
  );
}

export default App;


const a = () => {
  
}

<div onClick={()=>{a()}}></div>