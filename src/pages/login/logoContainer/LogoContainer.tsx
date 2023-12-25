import React from "react";

import { Logo } from "@/components/atoms/logo";
import { StyledLogoContainer } from "./logoContainer.styled";

type LogoContainerProps = {
    marginBottom: string,
};

const LogoContainer= ({
    marginBottom,
    ...props
}: LogoContainerProps) => {
    return (
        <StyledLogoContainer id="logo_container" {...props} marginBottom={marginBottom}>
            <Logo />
        </StyledLogoContainer>
    )
};

export { LogoContainer };
export type { LogoContainerProps };
