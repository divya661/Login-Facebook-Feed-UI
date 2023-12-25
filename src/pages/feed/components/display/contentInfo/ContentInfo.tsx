import React from "react";

import { StyledContentInfo } from "./contentInfo.styled";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/molecules/container";
import { useTheme } from "@/contexts/ThemeContext";

type ContentInfoProps = {
    content: string,
};

const ContentInfo = ({
    content,
    ...props
}: ContentInfoProps) => {
    const theme = useTheme();
    const textSecondaryColor = theme.components.page.colors.text.secondary;

    return (
        <StyledContentInfo id="content_info" {...props}>
            <Container paddingLeft="16px" height="75px" width="fit-content">
                <Text color={textSecondaryColor} fontWeight="500" size="md" lineHeight="150%" textAlign="left" display="block" height="100%" truncate={true}>{content}</Text>
            </Container>
        </StyledContentInfo>
    );
};

export default ContentInfo;
export type { ContentInfoProps };

