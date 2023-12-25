import styled from "@emotion/styled";
import { LogoContainerProps } from "./LogoContainer";

const StyledLogoContainer =
  styled.section <
  Required <
  LogoContainerProps >>
    `
  display: flex;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export { StyledLogoContainer };
