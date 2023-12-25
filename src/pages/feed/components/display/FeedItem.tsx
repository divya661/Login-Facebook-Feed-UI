import React from "react";
import Image from 'next/image';

import { Avatar } from "@/app/components/atoms/avatar";
import { Button } from "@/app/components/molecules/button";
import { Card } from "@/app/components/molecules/card";
import {Text} from "@/app/components/atoms/text";

type FeedItemProps = {
    avatar: string;
    personName: string;
    postTime: string;
    edited: boolean;
    content: string;
    commentsCount: number;
    feelingIcon: string;
}
const FeedItem = ({avatar, personName, postTime, edited, content, commentsCount,feelingIcon}:FeedItemProps) => {
   
    return (
        <Card width="100%" height="250px" borderRadius="8px" border="2px solid #35373B" paddingX="20px" paddingY="24px" backgroundColor="#27292D">
         
        <section id="feed_item_header" className="flex justify-between">
        <div className="flex">
            <Avatar accessibilityLabel={`Avatar for ${personName}`} initials="" name={personName} onError={()=>{ alert(`Unable to render avatar for ${personName}`)}} size = "sm" source = {`/${avatar}`}/>
            <div className="flex flex-col px-[16px]">
                <Text color="#C5C7CA" fontWeight="500" size="md" textAlign="left">{personName}</Text>
                <Text color="#7F8084" fontWeight="500" size="sm" textAlign="left">{postTime}</Text>
            </div>
        </div>
        <div>
        <Button onClick={(e) => { alert(`actions button clicked for ${personName}`); }} type="button" width="20px" height="20px" backGroundColor="transparent" borderRadius="0" padding="0" margin="0" float="right">
        <Image src="/Dots Horizontal.svg" alt="Actions" width={20} height={20} />
        </Button>
        </div>
        </section>
        <section id="content">

        </section>
        <section id="feed_item_footer">

        </section>
       
    </Card>
    );
}
  
export default FeedItem;
  