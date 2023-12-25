import styled from "@emotion/styled";

import { StyleIconProps } from "./Icon";

const StyledIcon = styled.button<StyleIconProps>`
   text-align: center;
   display: inline-block;
   color: ${({ color }) => color ? color : "inherit"};
   float: ${({ float }) => float ? float : "none"};
   width: ${({ size }) => size};
   height: ${({ size }) => size};
   position: ${({ position }) => position};
   font-size: ${({ fontSize }) => fontSize};
   border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "0"};
   border-color: ${({ borderColor }) => borderColor ? borderColor : "inherit"};
   border-width: ${({ borderWidth }) => borderWidth ? borderWidth : "0"};
   background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "inherit"};
`;

const StyledPlaceholderIconContainer = styled.span<{ 
   margin:string;
   padding:string;
   float:string;
 }>`
    padding:${({ padding }) => padding ?? "0"};
    margin: ${({ margin }) => margin ?? "0"};
    display: flex;
    float: ${({ float }) => float ?? "none" };
 `;
 
export { StyledIcon,StyledPlaceholderIconContainer };