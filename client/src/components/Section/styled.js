import styled from "styled-components";
import { colors } from "../../colors";
import Box from "@mui/material/Box";

export const Container = styled.div`
  /* background: ${(props) => (props.primary ? "palevioletred" : "tomato")}; */
  background-image: url("../../assets/traffic_controller.jpg");
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 50%;
  padding: 0.625rem;
`;

export const BoxCustom = styled(Box)`
  background: ${(props) => props.inputColor || colors.tomato2};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 0.625rem;
`;
