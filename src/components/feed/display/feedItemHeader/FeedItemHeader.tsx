import React from "react";
import Image from 'next/image';

import { StyledFeedItemHeader } from "./feedItemHeader.styled";
import { Container } from "@/components/molecules/container";
import { Avatar } from "@/components/atoms/avatar";
import { Button } from "@/components/molecules/button";
import  PersonInfo  from "../personInfo";

type FeedItemHeaderProps = {
    personName: string,
    postTime: string,
    edited: boolean,
    avatar: string,
};

const FeedItemHeader = ({
    personName,
    postTime,
    edited,
    avatar,
    ...props
}: FeedItemHeaderProps) => {
    return (
        <StyledFeedItemHeader id="feed_item_header" {...props}>
            <Container flexDirection="row">
                <Avatar accessibilityLabel={`Avatar for ${personName}`} initials="" name={personName} onError={() => { alert(`Unable to render avatar for ${personName}`) }} size="sm" source={`/${avatar}`} />
                <PersonInfo personName={personName} postTime={postTime} edited={edited}></PersonInfo>
            </Container>
            <Container>
                <Button onClick={(e) => { alert(`actions button clicked for ${personName}`); }} type="button" width="20px" height="20px" backGroundColor="transparent" borderRadius="0" padding="0" margin="0" float="right">
                    <Image src="/Dots Horizontal.svg" alt="Actions" width={20} height={20} />
                </Button>
            </Container>
        </StyledFeedItemHeader>
    );
};

export default FeedItemHeader;
export type { FeedItemHeaderProps };

