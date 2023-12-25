import React from "react";

import { StyledContentInfo } from "./contentInfo.styled";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/molecules/container";

type ContentInfoProps = {
    content: string,
};

const ContentInfo = ({
    content,
    ...props
}: ContentInfoProps) => {
    return (
        <StyledContentInfo id="content_info" {...props}>
            <Container paddingLeft="16px" height="75px" width="fit-content">
                <Text color="#7F8084" fontWeight="500" size="md" lineHeight="150%" textAlign="left" display="block" height="100%" truncate={true}>{content}</Text>
            </Container>
        </StyledContentInfo>
    );
};

export default ContentInfo;
export type { ContentInfoProps };

