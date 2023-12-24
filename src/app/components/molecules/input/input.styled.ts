import styled from '@emotion/styled';
import tw from "twin.macro";

const StyledInputContainer = styled.div`
   width: 100%;
   height: 70px;
   flex-shrink: 0;
   margin-bottom: 16px;
   border-radius: 4px;
`;

const StyledLabel = styled.label`
  margin: 0;
  color:#C5C7CA;
  font-size: 14px; 
  font-weight: 500;
  font-style: normal; 
  line-height:normal;
`;

const StyledInput = styled.input`
   color: #7F8084;
   font-size: 16px;
   font-style: normal;
   background-color: inherit;
   font-weight: 400;
   line-height: normal;
   width: 100%;
   height: 43px;
   flex-shrink: 0;
   border-radius: 4px;
   border: 1.5px solid #35373B;
   padding:12px;
   margin: 10px 0 0 0;
   display:flex;
`;

const StyledErrorText = styled.p`
  ${tw`text-xs italic`}
  color: red;
`;

const StyledIconContainer = styled.button`
  ${tw`cursor-pointer float-right mr-2.5 -mt-8`}
  :hover {
    color: white;
  }
`;

export { StyledInputContainer, StyledLabel, StyledInput, StyledIconContainer, StyledErrorText };
