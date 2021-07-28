import styled from "styled-components";
import defaultImg from "../images/defaultImg.jpg";
const StyledHero = styled.header`
  min-height: 80vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHero;
