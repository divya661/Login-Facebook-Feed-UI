import React, { ChangeEvent, FormEvent, useState } from "react";

import { Card } from "@/components/molecules/card";
import { Text } from "@/components/atoms/text";
import { Input } from "@/components/molecules/input";
import { Button } from "@/components/molecules/button";
import { ERROR_POST_CONTENT_MIN_LENGTH, POST_CONTENT_MIN_LENGTH } from "@/constants/post";
import { Form } from "@/components/molecules/form";

function CreatePost() {
    const [postContent, setPostContent] = useState<string>("");
    const [errorPostContent, setErrorPostContent] = useState<string>("");

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!errorPostContent.length) {
            alert("Post Submitted Successfully!");
            setPostContent("");
        }
    };

    const handlePostContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPostContent(value);
        if (value.length < POST_CONTENT_MIN_LENGTH) {
            setErrorPostContent(ERROR_POST_CONTENT_MIN_LENGTH);
        } else {
            setErrorPostContent("");
        }
    }

    return (
        <Form onSubmit={submit}>
            <Card width="100%" height="223px" borderRadius="8px" border="2px solid #35373B" paddingX="20px" paddingY="24px" backgroundColor="#27292D">

                <Input
                    id="createPost"
                    name="createPost"
                    label="Create Post"
                    labelStyle={{
                        fontSize: "lg",
                    }}
                    height="78px"
                    backgroundColor="#191920"
                    borderRadius="8px"
                    margin="16px 0 0 0"
                    padding="15px 16px 15px 80px"
                    placeholderIcon={
                        {
                            icon: "💬",
                            style: {
                                size: "48px",
                                borderWidth: "0",
                                borderColor: "transparent",
                                fontSize: "18px",
                                backgroundColor: "#27292D",
                                borderRadius: "50%",
                                padding: "15px 16px",
                                margin: "-78px 15px 0 0",
                                position: "fixed"
                            }
                        }
                    }
                    placeholder="How are you feeling today?"
                    value={postContent}
                    onChange={handlePostContentChange}
                    required={false}
                    type="text"
                    minLength={POST_CONTENT_MIN_LENGTH}
                />
                <Button onClick={(e) => { }} disabled={!!errorPostContent} type="submit" width="111px" height="43px" backGroundColor="#4A96FF" borderRadius="4px" padding="12px" margin="16px 0 0 0" float="right">
                    <Text color="#FFF" fontWeight="500" size="md" textAlign="center" display="inline-block">
                        Post
                    </Text>
                </Button>

            </Card>
        </Form>
    );
}

export default CreatePost;
