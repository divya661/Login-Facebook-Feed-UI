import styled from '@emotion/styled';
import tw from "twin.macro";

import { CardProps } from './Card';

const StyledCardContainer = styled.div<Required<CardProps>>`
   box-sizing: border-box;
   background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "white"};
   border-width: ${({ borderWidth }) => borderWidth};
   border-color: ${({ borderColor }) => borderColor};
   border-radius: ${({ borderRadius }) => borderRadius};
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   padding-top: ${({ paddingY }) => paddingY};
   padding-bottom: ${({ paddingY }) => paddingY};
   padding-left: ${({ paddingX }) => paddingX};
   padding-right: ${({ paddingX }) => paddingX};
   margin-top: ${({ marginY }) => marginY};
   margin-bottom: ${({ marginY }) => marginY};
   margin-bottom: ${({ marginY }) => marginY};
   margin-left: ${({ marginX }) => marginX};
   margin-right: ${({ marginX }) => marginX};
`;

export { StyledCardContainer };
