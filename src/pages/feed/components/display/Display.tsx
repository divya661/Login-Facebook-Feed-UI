import { mockFeed } from "@/app/utils/mock_feed";
import React from "react";
import FeedItem from "./FeedItem";


function Display() {
    const feedItem = mockFeed[0];
    return (
        <FeedItem {...feedItem}/>
    );
}
  
export default Display;
  