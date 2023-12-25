import React from "react";

import { StyledPersonInfo } from "./personInfo.styled";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/molecules/container";
import { useTheme } from "@/contexts/ThemeContext";

type PersonInfoProps = {
  personName: string,
  postTime: string,
  edited: boolean,
};

const PersonInfo = ({
  personName,
  postTime,
  edited,
  ...props
}: PersonInfoProps) => {
  const theme = useTheme();
  const textPrimaryColor = theme.components.page.colors.text.primary;
  const textSecondaryColor = theme.components.page.colors.text.secondary;

  return (
    <StyledPersonInfo {...props}>
      <Text color={textPrimaryColor} fontWeight="500" size="md" textAlign="left">{personName}</Text>
      <Container flexDirection="row">
        <Text color={textSecondaryColor} fontWeight="500" size="sm" textAlign="left">{postTime}</Text>
        {edited && (
          <Text color={textSecondaryColor} fontWeight="500" size="sm" textAlign="left" display="inline-block">&nbsp;• Edited</Text>
        )}
      </Container>
    </StyledPersonInfo>
  );
};

export default PersonInfo;
export type { PersonInfoProps };

