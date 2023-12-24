import React from "react";


function Feed() {
    return <div>Welcome to feed page</div>;
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