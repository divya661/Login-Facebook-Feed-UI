import styled from "@emotion/styled";

import { ContainerProps } from "./Container";

const StyledContainer =
  styled.div <
  Required <
  ContainerProps >>
    `
  box-sizing: border-box;
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-shrink:0;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "white")};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  margin-top: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
  margin-left: ${({ marginX }) => marginX};
  margin-right: ${({ marginX }) => marginX};
`;

export { StyledContainer };
