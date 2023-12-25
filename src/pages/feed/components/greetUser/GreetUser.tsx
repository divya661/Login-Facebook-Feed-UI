import React from "react";

import { StyledGreetUser } from "./greetUser.styled";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/molecules/container";

type GreetUserProps = {
  personName: string,
};

const GreetUser = ({
  personName,
  ...props
}: GreetUserProps) => {
  return (
    <StyledGreetUser  id="greet-user" {...props}>
          <Text color="#C5C7CA" fontWeight="500" size="4xl" textAlign="left">
            Hello {personName}
          </Text>
          <Container width="580px" marginTop="12px">
            <Text color="#7F8084" fontWeight="400" size="md" textAlign="left" lineHeight="150%">
              How are you doing today? Would you like to share something with the community 🤗
            </Text>
          </Container>
    </StyledGreetUser>
  );
};

export default GreetUser;
export type { GreetUserProps };

