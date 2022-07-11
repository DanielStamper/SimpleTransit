import { Link } from "react-router-dom";
import { colors } from "../../colors";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & > ul > li {
    padding-right: 0.625rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};

  &:active {
    text-decoration: none;
  }

  &:hover {
    font-weight: bold;
  }
`;
