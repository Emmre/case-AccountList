import React, { FC, InputHTMLAttributes } from "react";

import { ButtonStyled } from "./styled";

interface IInputProps extends InputHTMLAttributes<HTMLButtonElement> {
  type: string;
  isDisabled: string;
  bg: string;
  color: string;
}

const Button: FC<IInputProps> = ({ children, type, isDisabled, ...rest }) => (
  <ButtonStyled
    type={type}
    disabled={!isDisabled?.length}
    value={isDisabled?.length}
    {...rest}
  >
    {children}
  </ButtonStyled>
);

export default Button;
