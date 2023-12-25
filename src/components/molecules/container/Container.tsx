import { StyledContainer } from "./container.styled";

type ContainerProps = {
  children: any;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginY?: string;
  marginX?: string;
  display?: string;
  flexDirection?: string;
};

const Container = ({
  children,
  backgroundColor = "inherit",
  border = "0",
  borderRadius = "0",
  width = "inherit",
  height = "100%",
  paddingTop = "0",
  paddingBottom = "0",
  paddingLeft = "0",
  paddingRight = "0",
  marginY = "0",
  marginX = "0",
  display = "flex",
  flexDirection = "column",
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      width={width}
      height={height}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      marginX={marginX}
      marginY={marginY}
      display={display}
      flexDirection={flexDirection}
      {...props}>{children}</StyledContainer>
  );
};

export { Container };
export type { ContainerProps };

