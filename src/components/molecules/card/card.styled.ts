import styled from '@emotion/styled';

import { CardProps } from './Card';

const StyledCardContainer = styled.div<Required<CardProps>>`
   box-sizing: border-box;
   display: flex;
   flex-direction: ${({flexDirection}) => flexDirection};
   flex-shrink:0;
   background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "white"};
   border: ${({ border }) => border};
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
