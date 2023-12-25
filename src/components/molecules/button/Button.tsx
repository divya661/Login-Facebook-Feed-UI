import React, { FunctionComponent, MouseEventHandler } from 'react';

import { StyledButton } from './button.styled';

type ButtonProps = {
    children?: any;
    backGroundColor: string;
    width: string;
    height: string;
    margin: string;
    padding: string;
    borderRadius: string;
    borderColor?: string;
    borderWidth?: string;
    disabled?: boolean;
    onClick: MouseEventHandler<Element>;
    type: "button" | "submit" | "reset";
    float?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
    children,
    backGroundColor,
    width,
    height,
    margin,
    padding,
    borderRadius,
    borderColor,
    borderWidth,
    float = "none",
    type,
    disabled = false,
    onClick,
    ...props
}) => {
    return (
        <StyledButton disabled={disabled} type={type} onClick={onClick} float={float} width={width} height={height} backGroundColor={backGroundColor} margin={margin} padding={padding} borderRadius={borderRadius} borderColor={borderColor ?? "inherit"} borderWidth={borderWidth ?? "0"} {...props}>
            {children}
        </StyledButton>
    );
};

export { Button };
export type { ButtonProps };
