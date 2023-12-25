import { StyledFeelingContainer } from "./feeling.styled";

type FeelingProps = {
  children: any;
  backgroundColor?: string;
  border: string;
  borderRadius: string;
  size: string;
  marginY?: string;
  marginX?: string;
};

const Feeling = ({
  children,
  backgroundColor = "white",
  border,
  borderRadius,
  size,
  marginY = "0",
  marginX = "0",
  ...props
}: FeelingProps) => {
  return (
    <StyledFeelingContainer
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      size={size}
      marginX={marginX}
      marginY={marginY}
      {...props}>{children}</StyledFeelingContainer>
  );
};

export { Feeling };
export type { FeelingProps };

