import { StyledCardContainer } from "./card.styled";

type CardProps = {
  children: any;
  backgroundColor?: string;
  border: string;
   borderRadius: string;
  width: string;
  height: string;
  paddingY?: string;
  paddingX?: string;
  marginY?: string;
  marginX?: string;
};

const Card = ({
  children,
  backgroundColor = "white",
  border,
  borderRadius,
  width,
  height,
  paddingY = "0",
  paddingX = "0",
  marginY = "0",
  marginX = "0",
  ...props
}: CardProps) => {
  return (
    <StyledCardContainer
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      width={width}
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
      marginX={marginX}
      marginY={marginY}
      {...props}>{children}</StyledCardContainer>
  );
};

export { Card };
export type { CardProps };

