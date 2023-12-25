import React from "react";

import { StyledContentCard } from "./contentCard.styled";
import { Card } from "@/components/molecules/card";
import  ContentInfo  from "../contentInfo";
import Mood  from "../mood";

type ContentCardProps = {
    content: string,
    moodIcon: string,
};

const ContentCard = ({
    content,
    moodIcon,
    ...props
}: ContentCardProps) => {
    return (
        <StyledContentCard id="content" {...props}>
            <Card width="100%" flexDirection="row" height="107px" borderRadius="8px" border="2px solid #35373B" paddingX="16px" paddingY="15px" marginY="20px" backgroundColor="#191920">
                <Mood size="48px" backgroundColor="#27292D" border="0" borderRadius="50%" >{moodIcon}</Mood>
                <ContentInfo content={content}></ContentInfo>
            </Card>
        </StyledContentCard>
    );
};

export default  ContentCard;
export type { ContentCardProps };

