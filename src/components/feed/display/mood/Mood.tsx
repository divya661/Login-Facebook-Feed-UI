import { StyledMoodContainer } from "./mood.styled";

type MoodProps = {
  children: any;
  backgroundColor?: string;
  border: string;
  borderRadius: string;
  size: string;
  marginY?: string;
  marginX?: string;
};

const Mood = ({
  children,
  backgroundColor = "white",
  border,
  borderRadius,
  size,
  marginY = "0",
  marginX = "0",
  ...props
}: MoodProps) => {
  return (
    <StyledMoodContainer
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      size={size}
      marginX={marginX}
      marginY={marginY}
      {...props}>{children}</StyledMoodContainer>
  );
};

export default  Mood;
export type { MoodProps };

