import styled, { createGlobalStyle } from "styled-components";
import { up, down } from "styled-breakpoints";
import { normalize } from "styled-normalize";

interface InputProps {
  inputMail?: string;
}

export const Content = styled.div`
  ${up("md")} {
    margin: 0 auto;
    width: 1140px;
    max-width: 100%;
  }

  ${down("md")} {
    padding: 0 15px;
    position: relative;
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        box-sizing: border-box;
        height: 100%;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.5;
        color: #53605e;
        min-height: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        text-decoration: none;
    }

    a {
        color:inherit;
        cursor:pointer;
    }

    .disabled {
        pointer-events: none;
        opacity: 0.4;
    }
    
`;

export const Grid = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const Header = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.1px;
  color: #121212;
`;

export const FormStyled = styled.form<InputProps>`
  margin-top: ${(props) => (props.inputMail ? "27px" : "48px")};
`;

export const Username = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.1px;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 34px;
`;

export const InfoBox = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 18px;
  margin-bottom: 23px;
`;

export const InformationText = styled.div`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const ContentBox = styled.div`
  margin-bottom: 24px;
  margin-top: 10px;
  display: flex;
  &:nth-last-child(odd) {
    border-bottom: 1px solid #f1f3f5;
    padding-bottom: 17px;
  }
  img {
    border-radius: 12px;
  }
`;

export const TextBox = styled.div`
  margin-left: 16px;
`;

export const HeaderStyled = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

export const DescriptionStyled = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #64738c;
`;

export const HeaderShop = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 16px;
`;

export const AddBasket = styled.div`
  margin-top: 28px;
  align-items: center;
  display: flex;
  span {
    margin-left: 11px;
    color: #e82223;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.9px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TotalBox = styled.div`
  display: flex;
  margin-top: 12px;
  > div:first-child {
    margin-right: 26px;
  }
`;

export const TotalPrice = styled.div`
  margin-bottom: 33px;
  > div {
    margin-bottom: 11px;
  }
  > div:last-child {
    font-weight: bold;
    font-size: 24px;
  }
`;
