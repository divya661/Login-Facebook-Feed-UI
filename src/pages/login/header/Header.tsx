import React from "react";

import { StyledHeader } from "./header.styled";
import { Text } from "@/components/atoms/text";


type HeaderProps = {
    paddingBottom: string,
    textTeriatryColor:string,
};

const Header = ({
    paddingBottom,
    textTeriatryColor,
    ...props
}: HeaderProps) => {
    return (
        <StyledHeader textTeriatryColor={textTeriatryColor} id="login_form_header" {...props} paddingBottom={paddingBottom}>
            <Text color="#6B6C70" fontWeight="500" size="sm" textAlign="center">WELCOME BACK</Text>
            <Text color={textTeriatryColor} fontWeight="600" size="lg" textAlign="center" marginTop="8px">Log into your account</Text>
        </StyledHeader>
    )
};

export { Header };
export type { HeaderProps };
