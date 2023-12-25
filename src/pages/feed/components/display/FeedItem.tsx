import React from "react";

import { Card } from "@/components/molecules/card";
import  FeedItemHeader  from "./feedItemHeader";
import  FeedItemFooter  from "./feedItemFooter";
import  ContentCard  from "./contentCard";

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
    return (
        <Card width="100%" height="250px" borderRadius="8px" border="2px solid #35373B" paddingX="20px" paddingY="24px" backgroundColor="#27292D">
            <FeedItemHeader avatar={avatar} personName={personName} postTime={postTime} edited={edited}></FeedItemHeader>
            <ContentCard moodIcon={moodIcon} content={content}></ContentCard>
            <FeedItemFooter personName={personName} commentsCount={commentsCount}></FeedItemFooter>
        </Card>
    );
}

export { FeedItem };
export type { FeedItemProps };
