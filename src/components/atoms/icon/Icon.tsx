import React, { FunctionComponent } from 'react';

import { StyledIcon, StyledPlaceholderIconContainer } from './icon.styled';

interface StyleIconProps {
    color?: string;
    size: string;
    fontSize: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    borderColor?: string;
    borderWidth?: string;
    backgroundColor?: string;
    float?: string;
    position?: string;
}

type IconProps = {
    icon: (() => React.ReactNode) | React.ReactNode;
    onClick: () => void;
    style: StyleIconProps;
};

const Icon: FunctionComponent<IconProps> = ({ icon, onClick, style, ...props }) => {
    const renderedIcon = typeof icon === 'function' ? (icon as () => React.ReactNode)() : icon;

    return (
        <StyledPlaceholderIconContainer padding={style.padding ?? "0"} margin={style.margin ?? "0"} float={style.float ?? "none"}>
            <StyledIcon  {...style} onClick={onClick} {...props}>
                {renderedIcon}
            </StyledIcon>
        </StyledPlaceholderIconContainer>

    );
};

export { Icon };
export type { StyleIconProps, IconProps };
