import React from "react";

import CreatePost from "./components/createPost/CreatePost";
import Display from "./components/display/Display";
import { Container } from "@/components/molecules/container";
import { useTheme } from "@/contexts/ThemeContext";
import GreetUser from "./components/greetUser";

function Feed() {
  const theme = useTheme();
  const backgroundPrimaryColor = theme.components.page.colors.background.primary;

  return (
    <Container backgroundColor={backgroundPrimaryColor} height="100vh" width="100vw" justifyContent="center" alignItems="center">
      <Container display="flex" flexDirection="column" paddingTop="70px" width="700px" height="100%">
          <GreetUser personName={"Jane"}></GreetUser>
          <CreatePost />
          <Display />
      </Container>
    </Container>
  );
}

export { Feed };

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: false,
      pageName: "feed"
    }
  };
}
