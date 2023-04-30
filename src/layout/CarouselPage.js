import styled from "styled-components";
import MainComponent from "../component/MainComponent";
import Horizontal from "../component/Horizontal";
import Verticality from "../component/Verticality";

const CarouselContainer = styled.div`
`
const CarouselWindow = styled.div`
  border: 2px solid black;
`
const ContentBoxConrainer = styled.div`
  border: 2ps solid gray;
  width: 400vw;
  display: flex;
`
const ContentBox = styled.div`
  border: 2px solid red;
  flex: 1;
  gap: 10px;
  display: flex;
  height: 660px;
  padding: 10px;
  
`

const CarouselController = styled.div`
  height: 50px;
`
const DotContainer = styled.div`

`
const Dot = styled.div`

`
const Button = styled.div`

`

function Carousel(){
  return(
    <CarouselContainer>

      <CarouselWindow>
        <ContentBoxConrainer>

          <ContentBox>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <MainComponent />
            </Horizontal>
          </ContentBox>

          <ContentBox>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <Verticality>
                <MainComponent />
                <MainComponent />
              </Verticality>
            </Horizontal>
          </ContentBox>

          <ContentBox>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <MainComponent />
            </Horizontal>
          </ContentBox>

          <ContentBox>
            <MainComponent />
            <Horizontal>
              <MainComponent />
              <Verticality>
                <MainComponent />
                <MainComponent />
              </Verticality>
            </Horizontal>
          </ContentBox>

        </ContentBoxConrainer>
      </CarouselWindow>

      <CarouselController>
        <Button></Button>
        <DotContainer>
          <Dot></Dot>
          <Dot></Dot>
        </DotContainer>
        <Button></Button>
      </CarouselController>

    </CarouselContainer>
  )
}

export default Carousel;

