import styled from "styled-components";

interface InputProps {
  disabled?: string | any;
  color?: string | any;
  bg?: string | any;
  type?: string | any;
}

export const ButtonStyled = styled.button<InputProps>`
  border-radius: 12px;
  height: 56px;
  width: 100%;
  border: none;
  outline: none;
  background-color: ${(props) => (props.disabled ? "#BBC3CF" : props.bg)};
  color: ${(props) => (props.color ? props.color : "white")};
  border: 1px solid ${(props) => (props.color ? props.color : "transparent")};
`;
