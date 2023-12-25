import { FormEvent } from "react";
import { StyledForm } from "./form.styled";

type FormProps = {
  children: any;
  width?: string;
  height?: string;
  paddingY?: string;
  paddingX?: string;
  marginY?: string;
  marginX?: string;
  flexDirection?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = ({
  children,
  width = "100%",
  height = "100%",
  paddingY = "0",
  paddingX = "0",
  marginY = "0",
  marginX = "0",
  flexDirection = "column",
  onSubmit,
  ...props
}: FormProps) => {
  return (
    <StyledForm
      onSubmit={onSubmit}
      width={width}
      height={height}
      paddingX={paddingX}
      paddingY={paddingY}
      marginX={marginX}
      marginY={marginY}
      flexDirection={flexDirection}
      {...props}>
      {children}
    </StyledForm>
  );
};

export { Form };
export type { FormProps };

