import styled from "@emotion/styled";
import { HeaderProps } from "./Header";

const StyledHeader =
  styled.section <
  Required <
  HeaderProps >>
    `
  display: flex;
  flex-direction:column;
  justify-content: center;
  text-align: center;
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`;

export { StyledHeader };
