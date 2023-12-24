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
    onClick: MouseEventHandler<Element>;
    type: "button" | "submit" | "reset";
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
    type,
    onClick,
    ...props
}) => {
    return (
        <StyledButton type={type} onClick={onClick} width={width} height={height} backGroundColor={backGroundColor} margin={margin} padding={padding} borderRadius={borderRadius} borderColor={borderColor ?? "inherit"} borderWidth={borderWidth ?? "0"} {...props}>
            {children}
        </StyledButton>
    );
};

export { Button };
export type { ButtonProps };
