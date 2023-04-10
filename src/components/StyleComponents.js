import styled from "styled-components";


const DirectionArrow = styled.button`
  position: absolute;
  bottom: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1, 1);
  transition: 0.3s all ease-in-out;
  color: #FF2625;
  font-size: 25px;
  border-radius: 4px;

  &:hover {
    transform: scale(1.3, 1.3);
  }

  @media screen and (max-width: 1200px) {
    position: static;
  }
`;
const LeftArrow = styled(DirectionArrow)`
  right: 80px;
`;
const RightArrow = styled(DirectionArrow)`
  right: 140px;
`;

const HorizontalScrollingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const DetailImage = styled.div`
  width: 729px;
  height: 742px;
  @media screen and (max-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;

const VisualBannerTag = styled.div`
  position: absolute;
  right: 40px;
  top: 0;
  width: 700px;
  height: 900px;
  margin-top: -330px;
  @media screen and (max-width: 1200px) {
    display: none;;
  }
`;

//bodypart , exercise card 공통 효과
const CardAnimation = styled.div`
  transform: scale(1, 1);
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const CardAnimationHover = styled(CardAnimation)`
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const ExerciseCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 445px;
  padding-bottom: 10px;
  background: #ffffff;
  border-top: 4px solid #FF2625;
  border-bottom-left-radius: 20px;

  @media screen and (max-width: 1200px) {
    width: 320px;
  }
  @media screen and (max-width: 400px) {
    width: 280px;
  }
`;
const ExerciseCardImg = styled.img`
  height: 326px;
`;

const ExerciseVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 387px;
  height: 381px;
  @media screen and (max-width: 1200px) {
    width: 320px;
    height: 300px;
  }
`;

export {
    DirectionArrow,
    LeftArrow,
    RightArrow,
    HorizontalScrollingWrapper,
    DetailImage,
    VisualBannerTag,
    CardAnimation,
    CardAnimationHover,
    ExerciseCard,
    ExerciseCardImg,
    ExerciseVideo
}

