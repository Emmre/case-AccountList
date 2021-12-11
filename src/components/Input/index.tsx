import React, { FC, Fragment, InputHTMLAttributes } from "react";
import { InputStyled, LabelStyled } from "./styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  value: string;
  label: string;
}

const Input: FC<IInputProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
  ...rest
}) => (
  <>
    {value && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    <InputStyled
      id={name}
      type={type}
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  </>
);

export default Input;
