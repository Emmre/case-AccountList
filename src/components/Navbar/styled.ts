import styled from "styled-components";

export const NavbarContent = styled.div`
  width: 100%;
  height: 88px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 13px;
    color: #53605e;
  }
`;
