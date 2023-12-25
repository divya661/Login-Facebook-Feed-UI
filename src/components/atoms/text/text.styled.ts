import styled from "@emotion/styled";

import { TextProps } from "./Text";
import { KeyValue } from "@/interfaces/global";

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
  max-width: 100%;
  display: ${({ display }) => display};
  float: ${({ float }) => float};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  font-size: ${({ size }) => fontSizes[size]};
  line-height:${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0"};
  margin-top: ${({ marginTop }) => marginTop ?? "0"};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ isXXSmallAllUppercase, size }) =>
    size === "2xs" && isXXSmallAllUppercase ? "uppercase" : "none"};
  height: ${({ height }) => height};
  
  ${({ truncate }) =>
  truncate &&
  `
    overflow-y: auto;
    overflow-x:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  `}
`;

export { StyledText, fontSizes };
