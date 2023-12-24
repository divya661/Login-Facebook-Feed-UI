import React from "react";

import { Text } from "@/app/components/atoms/text";
import CreatePost from "./components/createPost/CreatePost";
import Display from "./components/display/Display";


function Feed() {
    return (
        <div className="w-screen h-screen overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center bg-theme-black ">
            <section className="border-box">
                <Text color="#C5C7CA" fontWeight="500" size="4xl" textAlign="left">Hello Jane</Text>
                <div className="w-[550px]">
                    <Text color="#7F8084" fontWeight="400" size="md" textAlign="left" lineHeight="150%">How are you doing today? Would you like to share something with the community 🤗</Text>
                </div>
            </section>
            <CreatePost />
            <Display />
        </div>
    );
}

export default Feed;

export async function getStaticProps(context: any) {
    return {
        props: {
            protected: false,
            pageName: "feed",
        },
    };
}