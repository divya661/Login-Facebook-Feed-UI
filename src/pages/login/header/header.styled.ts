import styled from "@emotion/styled";
import { HeaderProps } from "./Header";

const StyledHeader =
  styled.section <
  Required <
  HeaderProps >>
    `
  display: flex;
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`;

export { StyledHeader };
