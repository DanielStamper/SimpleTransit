import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  width: 100%;
  height: 3.5rem;
  background-color: ${colors.grey};
  color: ${colors.white};
  padding: 0.8rem;
`;
