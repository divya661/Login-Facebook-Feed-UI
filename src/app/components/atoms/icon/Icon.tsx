import React, { FunctionComponent } from 'react';
import { IconType } from "react-icons";

import { StyledIcon } from './icon.styled';

interface StyleIconProps {
    color?: string;
    size: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    borderColor?: string;
    borderWidth?: string;
    backgroundColor?: string;
    float?: string;
}

type IconProps = {
    icon: (() => React.ReactNode) | React.ReactNode;
    onClick: () => void;
    style: StyleIconProps;
};

const Icon: FunctionComponent<IconProps> = ({ icon, onClick, style, ...props }) => {
    const renderedIcon = typeof icon === 'function' ? (icon as () => React.ReactNode)() : icon;

    return (
        <StyledIcon  {...style} onClick={onClick} {...props}>
            {renderedIcon}
        </StyledIcon>
    );
};

export { Icon };
export type { StyleIconProps, IconProps };
