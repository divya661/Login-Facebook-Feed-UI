import React from "react";

import { StyledContentCard } from "./contentCard.styled";
import { Card } from "@/components/molecules/card";
import  ContentInfo  from "../contentInfo";
import Mood  from "../mood";
import { useTheme } from "@/contexts/ThemeContext";

type ContentCardProps = {
    content: string,
    moodIcon: string,
};

const ContentCard = ({
    content,
    moodIcon,
    ...props
}: ContentCardProps) => {
    const theme = useTheme();
    const backgroundSecondaryColor = theme.components.page.colors.background.secondary;
    const backgroundTeritaryColor = theme.components.page.colors.background.teriatry;
    const borderSecondaryColor = theme.components.page.colors.border.secondary;

    return (
        <StyledContentCard id="content" {...props}>
            <Card width="100%" flexDirection="row" height="107px" borderRadius="8px" border={`2px solid ${borderSecondaryColor}`} paddingX="16px" paddingY="15px" marginY="20px" backgroundColor={backgroundTeritaryColor}>
                <Mood size="48px" backgroundColor={backgroundSecondaryColor} border="0" borderRadius="50%" >{moodIcon}</Mood>
                <ContentInfo content={content}></ContentInfo>
            </Card>
        </StyledContentCard>
    );
};

export default  ContentCard;
export type { ContentCardProps };

