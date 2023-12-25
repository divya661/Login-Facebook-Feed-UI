import tw from "twin.macro";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { AvatarSizes } from "./Avatar";
import { Theme } from "@/app/contexts/ThemeContext";

const sizes: Record<AvatarSizes, string> = {
  xs: "32px",
  sm: "44px",
  md: "64px",
  lg: "80px",
  xl: "96px"
};

const getSize = (size: AvatarSizes): string => sizes[size];

const StyledAvatarContainer = styled.div<{ size: AvatarSizes } & { theme: Theme }>`
  ${tw`items-center box-border rounded-full cursor-default overflow-hidden flex`}
  background: ${({ theme }) => theme.components.initialsAvatar.backgroundColor};
  ${({ size }) => css`
    width: ${getSize(size)};
    height: ${getSize(size)};
  `};
`;

const StyledAvatarImage = styled.img`
  ${tw`w-full h-full object-cover`}
`;

export { StyledAvatarContainer, StyledAvatarImage };

