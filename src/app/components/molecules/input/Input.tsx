import React from 'react';
import { Icon, IconProps } from '../../atoms/icon';

import { LinkProps, Link } from '../../atoms/link';
import { StyledInputContainer, StyledLabel, StyledInput, StyledErrorText, StyledIconContainer } from './input.styled';


type InputProps = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  errorMessage?: string | undefined;
  required?: boolean;
  type: string;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  autoFocus?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  icon?: IconProps | null;
  helpOrInfoLink?: LinkProps | null;
};

const Input = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  type,
  hasError,
  autoComplete,
  errorMessage,
  required,
  minLength,
  maxLength,
  pattern,
  autoFocus = false,
  onKeyDown = () => { },
  onKeyUp = () => { },
  icon = null,
  helpOrInfoLink = null,
  ...props
}: InputProps) => {
  return (

    <StyledInputContainer>
      <StyledLabel htmlFor={id}>
        {label} {required ? <span className="text-red-500">*</span> : null}
      </StyledLabel>
      {helpOrInfoLink && (
        <Link {...helpOrInfoLink} />
      )
      }

      <StyledInput
        autoComplete={autoComplete}
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
        {...props}
      />
      {icon && (
        <Icon onClick={icon.onClick} icon={icon.icon} style={icon.style} />
      )}
      {hasError ? <StyledErrorText>*{errorMessage}</StyledErrorText> : null}
    </StyledInputContainer>
  );
};

export { Input };
export type { InputProps };

