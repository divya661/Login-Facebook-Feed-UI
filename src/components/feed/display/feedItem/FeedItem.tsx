import React from "react";

import { Card } from "@/components/molecules/card";
import  FeedItemHeader  from "../feedItemHeader";
import  FeedItemFooter  from "../feedItemFooter";
import  ContentCard  from "../contentCard";
import { useTheme } from "@/contexts/ThemeContext";

type FeedItemProps = {
    avatar: string,
    personName: string,
    postTime: string,
    edited: boolean,
    content: string,
    commentsCount: number,
    moodIcon: string,
};

const FeedItem = ({ avatar, personName, postTime, edited, content, commentsCount, moodIcon }: FeedItemProps) => {
    const theme = useTheme();
    const borderSecondaryColor = theme.components.page.colors.border.secondary;
    const backgroundSecondaryColor = theme.components.page.colors.background.secondary;

    return (
        <Card width="100%" height="250px" borderRadius="8px" border={`2px solid ${borderSecondaryColor}`} paddingX="20px" paddingY="24px" backgroundColor={backgroundSecondaryColor}>
            <FeedItemHeader avatar={avatar} personName={personName} postTime={postTime} edited={edited}></FeedItemHeader>
            <ContentCard moodIcon={moodIcon} content={content}></ContentCard>
            <FeedItemFooter personName={personName} commentsCount={commentsCount}></FeedItemFooter>
        </Card>
    );
}

export { FeedItem };
export type { FeedItemProps };
