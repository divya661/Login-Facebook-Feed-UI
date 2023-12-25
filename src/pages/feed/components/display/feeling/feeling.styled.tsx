import styled from '@emotion/styled';

import { FeelingProps } from './Feeling';

const StyledFeelingContainer = styled.div<Required<FeelingProps>>`
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-shrink:0;
   background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "white"};
   border: ${({ border }) => border};
   border-radius: ${({ borderRadius }) => borderRadius};
   width: ${({ size }) => size};
   height: ${({ size }) => size};
   margin-top: ${({ marginY }) => marginY};
   margin-bottom: ${({ marginY }) => marginY};
   margin-left: ${({ marginX }) => marginX};
   margin-right: ${({ marginX }) => marginX};
`;

export { StyledFeelingContainer };
