import React from "react";
import Image from 'next/image';

import { StyledFeedItemFooter } from "./feedItemFooter.styled";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/molecules/button";
import { useTheme } from "@/contexts/ThemeContext";

type FeedItemFooterProps = {
    personName: string,
    commentsCount: number,
};

const FeedItemFooter = ({
    personName,
    commentsCount,
    ...props
}: FeedItemFooterProps) => {
    const theme = useTheme();
    const textSecondaryColor = theme.components.page.colors.text.secondary;
  
    return (
        <StyledFeedItemFooter id="feed_item_footer" {...props}>
            <Button onClick={(e) => { alert(`actions button clicked for ${personName}`); }} type="button" width="20px" height="20px" backGroundColor="transparent" borderRadius="0" padding="0" margin="0" float="right">
                <Image src="/Chat Bubble.svg" alt="comments" width={20} height={20} />
            </Button>
            <Text color={textSecondaryColor} fontWeight="400" size="sm" textAlign="left" >&nbsp;&nbsp; {commentsCount} comments</Text>
        </StyledFeedItemFooter>
    );
};

export default FeedItemFooter ;
export type { FeedItemFooterProps };

