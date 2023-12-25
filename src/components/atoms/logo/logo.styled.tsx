import tw from "twin.macro";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { LogoSizes } from "./Logo";
import { Theme } from "@/contexts/ThemeContext";

const sizes: Record<LogoSizes, string> = {
  xs: "2.5rem",
  sm: "4rem",
  md: "8rem",
  lg: "12rem",
  xl: "24rem"
};

const getSize = (size: LogoSizes): string => sizes[size];

const StyledLogoContainer = styled.div<{ size: LogoSizes }>`
  ${tw`items-center  box-border cursor-default overflow-hidden flex `}
  ${({ size }) => css`
    width: ${getSize(size)};
    height: ${getSize(size)};
  `};
`;


export { StyledLogoContainer };

