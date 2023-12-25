import React from 'react';

import { Icon, IconProps, StyleIconProps } from '../../atoms/icon';
import { LinkProps, Link } from '../../atoms/link';
import { StyledInputContainer, StyledLabel, StyledInput, StyledErrorText } from './input.styled';

type PlaceholderIconProps = {
  icon: string | React.ReactNode;
  style: StyleIconProps;
}

type StyleLabelProps = {
  fontSize?: string;
}

type InputProps = {
  id: string;
  name: string;
  label?: string;
  labelStyle?: StyleLabelProps;
  placeholder?: string;
  placeholderIcon?: PlaceholderIconProps;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  errorMessage?: string | undefined;
  required?: boolean;
  type: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  icon?: IconProps | null;
  helpOrInfoLink?: LinkProps | null;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
};

const Input = ({
  id,
  name,
  label,
  labelStyle = { fontSize: "14px" },
  placeholder,
  placeholderIcon,
  value,
  onChange,
  type,
  hasError,
  errorMessage,
  required,
  minLength,
  maxLength,
  pattern,
  onKeyDown = () => { },
  onKeyUp = () => { },
  icon = null,
  helpOrInfoLink = null,
  height = "43px",
  backgroundColor = "inherit",
  borderRadius = "4px",
  margin = "10px 0 0 0",
  padding = "12px",
  ...props
}: InputProps) => {
  return (

    <StyledInputContainer height={height} fontSize={labelStyle.fontSize ?? "md"}>
      <StyledLabel htmlFor={id} fontSize={labelStyle.fontSize ?? "14px"}>
        {label} {required ? <span className="text-red-500">*</span> : null}
      </StyledLabel>
      {helpOrInfoLink && (
        <Link {...helpOrInfoLink} />
      )
      }

      <StyledInput
        backgroundColor={backgroundColor}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        height={height}
        borderRadius={borderRadius}
        margin={margin}
        padding={padding}
        {...props}
      />
      {placeholderIcon?.icon && (
          <Icon onClick={() => { }} icon={placeholderIcon.icon} style={placeholderIcon.style} />
      )}
      {icon && (
        <Icon onClick={icon.onClick} icon={icon.icon} style={icon.style} />
      )}
      {hasError ? <StyledErrorText>*{errorMessage}</StyledErrorText> : null}
    </StyledInputContainer>
  );
};

export { Input };
export type { InputProps, StyleLabelProps };

