import React from "react";

import Login from "./login";

function Home() {
  return <Login />;
}

export default Home;

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: false,
      pageName: "home",
    },
  };
}