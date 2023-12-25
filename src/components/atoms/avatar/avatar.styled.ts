import tw from "twin.macro";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { AvatarSizes } from "./Avatar";

const sizes: Record<AvatarSizes, string> = {
  xs: "32px",
  sm: "44px",
  md: "64px",
  lg: "80px",
  xl: "96px"
};

const getSize = (size: AvatarSizes): string => sizes[size];

const StyledAvatarContainer = styled.div<{ size: AvatarSizes }>`
  box-sizing: border-box;
  border-radius: 50%;
  cursor: default;
  overflow: hidden;
  display: flex;
  align-items: center;
  ${({ size }) => css`
    width: ${getSize(size)};
    height: ${getSize(size)};
  `};
`;

const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { StyledAvatarContainer, StyledAvatarImage };

