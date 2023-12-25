import styled from '@emotion/styled';

import { MoodProps } from './Mood';

const StyledMoodContainer = styled.div<Required<MoodProps>>`
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

export { StyledMoodContainer };
