import styled from "@emotion/styled";

import { FormProps } from "./Form";

const StyledForm =
  styled.form <
  Required <
  FormProps >>
    `
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  paddingY: ${({ paddingY }) => paddingY};
  paddingX: ${({ paddingX }) => paddingX};
  marginY: ${({ marginY }) => marginY};
  marginX: ${({ marginX }) => marginX};
`;

export { StyledForm };
