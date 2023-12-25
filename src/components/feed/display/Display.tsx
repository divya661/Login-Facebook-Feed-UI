import React from "react";

import { List } from "@/components/molecules/list";
import { mockFeed } from "@/utils/mock_feed";
import { FeedItem, FeedItemProps } from "./feedItem/FeedItem";
import { StyledDisplay } from "./display.styled";


function Display() {
    const renderItem = (item: FeedItemProps) => {
        const postKey = item.personName + '_' + item.postTime;
        return (
            <StyledDisplay id={'feed-display_'+postKey} key={'feed-display_'+postKey}>
            <List.Item id={postKey} key={postKey}>
                <FeedItem {...item} />
            </List.Item>
            </StyledDisplay>
        );
    };

    return (
        <List dataSource={mockFeed} renderItem={renderItem} />

    );
}

export default Display;
