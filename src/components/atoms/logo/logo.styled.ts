import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { LogoSizes } from "./Logo";

const sizes: Record<LogoSizes, string> = {
  xs: "2.5rem",
  sm: "4rem",
  md: "8rem",
  lg: "12rem",
  xl: "24rem"
};

const getSize = (size: LogoSizes): string => sizes[size];

const StyledLogoContainer = styled.div<{ size: LogoSizes }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  overflow: hidden;
  ${({ size }) => css`
    width: ${getSize(size)};
    height: ${getSize(size)};
  `};
`;


export { StyledLogoContainer };

