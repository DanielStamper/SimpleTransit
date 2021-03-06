import { Link } from "react-router-dom";
import { colors } from "../../colors";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  /* font-weight: bold; */

  &:active {
    text-decoration: none;
  }

  &:hover {
    font-weight: bolder;
    color: ${colors.grey};
  }
`;
