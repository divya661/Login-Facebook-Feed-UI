import React from "react";

import { List } from "@/components/molecules/list";
import { mockFeed } from "@/utils/mock_feed";
import { FeedItem, FeedItemProps } from "./FeedItem";


function Display() {
    const renderItem = (item: FeedItemProps) => {
        const postKey = item.personName + '_' + item.postTime;
        return (
            <List.Item id={postKey} key={postKey}>
                <FeedItem {...item} />
            </List.Item>
        );
    };

    return (
        <List dataSource={mockFeed} renderItem={renderItem} />

    );
}

export default Display;
