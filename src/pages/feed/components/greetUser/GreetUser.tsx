import React from "react";

import { StyledGreetUser } from "./greetUser.styled";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/molecules/container";
import { useTheme } from "@/contexts/ThemeContext";

type GreetUserProps = {
  personName: string,
};

const GreetUser = ({
  personName,
  ...props
}: GreetUserProps) => {
  const theme = useTheme();
  const textPrimaryColor = theme.components.page.colors.text.primary;
  const textSecondaryColor = theme.components.page.colors.text.secondary;

  return (
    <StyledGreetUser  id="greet-user" {...props}>
          <Text color={textPrimaryColor} fontWeight="500" size="4xl" textAlign="left">
            Hello {personName}
          </Text>
          <Container width="580px" marginTop="12px">
            <Text color={textSecondaryColor} fontWeight="400" size="md" textAlign="left" lineHeight="150%">
              How are you doing today? Would you like to share something with the community 🤗
            </Text>
          </Container>
    </StyledGreetUser>
  );
};

export default GreetUser;
export type { GreetUserProps };

