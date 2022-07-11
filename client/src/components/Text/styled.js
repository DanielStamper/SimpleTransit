import styled from "styled-components";

export const Paragraph = styled.p`
  // Note: background
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
`;
