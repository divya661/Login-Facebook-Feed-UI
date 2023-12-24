import { FunctionComponent } from "react";

import { StyledText } from "./text.styled";

type TextSizeType =
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

interface TextProps {
  children: any
  display?: string;
  float?: string;
  color?: string;
  cursor?: string;
  fontWeight?: string;
  isXXSmallAllUppercase?: boolean;
  lineHeight?: string;
  marginBottom?: string;
  marginTop?: string;
  size?: TextSizeType;
  textAlign?: string;
  onClick?: () => void;
}

const Text: FunctionComponent<TextProps> = ({
  children,
  display = "block",
  float = "none",
  color = "inherit",
  cursor = "default",
  fontWeight = "400",
  isXXSmallAllUppercase = true,
  lineHeight = "",
  marginBottom = "0",
  marginTop = "0",
  size = "md",
  textAlign = "center",
  onClick = () => { },
  ...props
}) => {
  return (
    <StyledText
      display={display}
      float={float}
      color={color}
      cursor={cursor}
      fontWeight={fontWeight}
      textAlign={textAlign}
      isXXSmallAllUppercase={isXXSmallAllUppercase}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      marginTop={marginTop}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export { Text };
export type { TextProps, TextSizeType };

