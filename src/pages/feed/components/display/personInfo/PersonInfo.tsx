import React from "react";

import { StyledPersonInfo } from "./personInfo.styled";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/molecules/container";

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
  return (
    <StyledPersonInfo {...props}>
      <Text color="#C5C7CA" fontWeight="500" size="md" textAlign="left">{personName}</Text>
      <Container flexDirection="row">
        <Text color="#7F8084" fontWeight="500" size="sm" textAlign="left">{postTime}</Text>
        {edited && (
          <Text color="#7F8084" fontWeight="500" size="sm" textAlign="left" display="inline-block">&nbsp;• Edited</Text>
        )}
      </Container>
    </StyledPersonInfo>
  );
};

export default PersonInfo;
export type { PersonInfoProps };

