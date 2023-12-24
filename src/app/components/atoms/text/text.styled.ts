import tw from "twin.macro";
import styled from "@emotion/styled";

import { TextProps } from "./Text";
import { KeyValue } from "@/app/interfaces/global";

const fontSizes: KeyValue = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "22px",
  "3xl": "24px",
  "4xl": "28px",
};

const StyledText = styled.p<Required<TextProps>>`
  display: ${({ display }) => display};
  float: ${({ float }) => float};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  font-size: ${({ size }) => fontSizes[size]};
  line-height: "normal";
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0"};
  margin-top: ${({ marginTop }) => marginTop ?? "0"};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ isXXSmallAllUppercase, size }) =>
    size === "2xs" && isXXSmallAllUppercase ? "uppercase" : "none"};
`;

export { StyledText, fontSizes };
