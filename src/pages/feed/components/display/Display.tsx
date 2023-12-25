import { List } from "@/app/components/molecules/list";
import { mockFeed } from "@/app/utils/mock_feed";
import React from "react";
import  {FeedItem, FeedItemProps } from "./FeedItem";


function Display() {
    const renderItem = (item: FeedItemProps) => {
        const postKey = item.personName+'_'+item.postTime;
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
  