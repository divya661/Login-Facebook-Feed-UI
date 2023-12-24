import styled from "@emotion/styled";

import { StyleIconProps } from "./Icon";

const StyledIcon = styled.button<StyleIconProps>`
   color: ${({ color }) => color ? color : "inherit"};
   float: ${({ float }) => float ? float : "none"};
   width: ${({ size }) => size};
   height: ${({ size }) => size};
   padding: ${({ padding }) => padding ? padding : "0"};
   margin: ${({ margin }) => margin ? margin : "0"};
   border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "0"};
   border-color: ${({ borderColor }) => borderColor ? borderColor : "inherit"};
   border-width: ${({ borderWidth }) => borderWidth ? borderWidth : "0"};
   backgroundColor: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "inherit"};
`;

export { StyledIcon };