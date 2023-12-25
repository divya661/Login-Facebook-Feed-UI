import React, { ChangeEvent, FormEvent, useState } from "react";

import { Card } from "@/components/molecules/card";
import { Text } from "@/components/atoms/text";
import { Input } from "@/components/molecules/input";
import { Button } from "@/components/molecules/button";
import { ERROR_POST_CONTENT_MIN_LENGTH, POST_CONTENT_MIN_LENGTH } from "@/constants/post";
import { Form } from "@/components/molecules/form";
import { StyledCreatePost } from "./createPost.styled";
import { useTheme } from "@/contexts/ThemeContext";

function CreatePost() {
    const [postContent, setPostContent] = useState<string>("");
    const [errorPostContent, setErrorPostContent] = useState<string>("");

    const theme = useTheme();
    const backgroundSecondaryColor = theme.components.page.colors.background.secondary;
    const backgroundTeritaryColor = theme.components.page.colors.background.teriatry;
    const textTeriatryColor = theme.components.page.colors.text.teriatry;
    const borderSecondaryColor = theme.components.page.colors.border.secondary;
    const buttonPrimaryColor = theme.components.page.colors.button.primary;

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
        <StyledCreatePost id="create-post">
        <Form onSubmit={submit} width="100%">
            <Card width="100%" height="223px" borderRadius="8px" border={`2px solid ${borderSecondaryColor}`} paddingX="20px" paddingY="24px" backgroundColor={backgroundSecondaryColor}>

                <Input
                    id="createPost"
                    name="createPost"
                    label="Create Post"
                    labelStyle={{
                        fontSize: "lg",
                    }}
                    height="78px"
                    backgroundColor={backgroundTeritaryColor}
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
                                backgroundColor: backgroundSecondaryColor,
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
                <Button onClick={(e) => { }} disabled={!!errorPostContent} type="submit" width="111px" height="43px" backGroundColor={buttonPrimaryColor} borderRadius="4px" padding="12px" margin="16px 0 0 0" float="right">
                    <Text color={textTeriatryColor} fontWeight="500" size="md" textAlign="center" display="inline-block">
                        Post
                    </Text>
                </Button>

            </Card>
        </Form>
        </StyledCreatePost>
    );
}

export default CreatePost;
