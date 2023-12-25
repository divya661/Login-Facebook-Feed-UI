import styled from '@emotion/styled';
import tw from "twin.macro";
import { fontSizes } from '../../atoms/text/text.styled';
import { StyleLabelProps } from './Input';

const StyledInputContainer = styled.div<{height:string,fontSize:string}>`
   width: 100%;
   height: ${({height,fontSize})=> `calc(${height} + ${fontSizes[fontSize]})`};
   flex-shrink: 0;
   margin-bottom: 16px;
   border-radius: 4px;
`;

const StyledLabel = styled.label<Required<StyleLabelProps>>`
  margin: 0;
  color:#C5C7CA;
  font-size: ${({ fontSize }) => fontSizes[fontSize]}; 
  font-weight: 500;
  font-style: normal; 
  line-height:normal;
`;

const StyledInput = styled.input<{ 
  height: string; 
  backgroundColor: string; 
  borderRadius: string; 
  margin:string;
  padding:string;
}>`
   color: #7F8084;
   font-size: 16px;
   font-style: normal;
   background-color: ${({ backgroundColor }) => backgroundColor ?? "inherit"};
   font-weight: 400;
   line-height: normal;
   width: 100%;
   height: ${({ height }) => height};
   flex-shrink: 0;
   border-radius: ${({ borderRadius }) => borderRadius};
   border: 1.5px solid #35373B;
   padding:${({ padding }) => padding ?? "12px"};
   margin: ${({ margin }) => margin ?? "10px 0 0 0"};
   display:flex;
`;

const StyledErrorText = styled.p`
  ${tw`text-xs italic`}
  color: red;
`;


export { StyledInputContainer, StyledLabel, StyledInput, StyledErrorText };
