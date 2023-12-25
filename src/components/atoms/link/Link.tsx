import React, { FunctionComponent } from 'react';

import { Text, TextSizeType } from '../text';
import { StyledLink } from './link.styled';

interface StyleLinkProps {
    color: string;
    textDecoration: string;
    fontWeight: string;
    size: TextSizeType;
}

type LinkProps = {
    text: string;
    href: string;
    style: StyleLinkProps;
};

const Link: FunctionComponent<LinkProps> = ({ text, href, style, ...props }) => {
    return (
        <StyledLink textDecoration={style.textDecoration} href={href} {...props}>
            <Text display='inline-block' float="right" color={style.color} size={style.size} fontWeight={style.fontWeight} textAlign="right">{text}</Text>
        </StyledLink>
    );
};

export { Link };
export type { StyleLinkProps, LinkProps };
