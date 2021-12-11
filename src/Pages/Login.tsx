import React, { FC, Fragment, useEffect, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import Button from "../components/Button";
import Input from "../components/Input";
import {
  FormStyled,
  Header,
  Username,
  InfoBox,
  InformationText,
} from "../elements/styled";
import "../translations/i18n";
import SelectBox from "../components/SelectBox";

const Login: FC = () => {
  const { t } = useTranslation();
  let getItem = JSON.parse(localStorage.getItem("isLogin"));

  const [inputMail, setValue] = useState(getItem?.email || "");
  const [inputPassword, setPassword] = useState(getItem?.password || "");
  const [isLogin, setIsLogin] = useState(false);
  const [locale, setLocale] = useState(getItem?.language);

  useEffect(() => {
    if (inputMail && inputPassword) {
      setIsLogin(true);
    }
  }, []);

  const handleClick = () => {
    const login = {
      email: inputMail,
      password: inputPassword,
      language: locale,
    };
    localStorage.setItem("isLogin", JSON.stringify(login));
  };

  const logOut = () => {
    localStorage.removeItem("isLogin");
    setValue("");
    setPassword("");
    setIsLogin(false);
  };

  return (
    <div style={{ marginTop: "10vh" }}>
      <Header>Account</Header>
      {!isLogin ? (
        <FormStyled inputMail={inputMail}>
          <Input
            type="mail"
            placeholder="E-mail"
            value={inputMail}
            onChange={(e: any) => setValue(e.target.value)}
            label="E-posta"
          />
          <Input
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={(e: any) => setPassword(e.target.value)}
            label="Password"
          />
          <SelectBox
            selected={locale}
            onChange={(e) => setLocale(e.target.value)}
          />
          <Button
            type="submit"
            isDisabled={inputMail && inputPassword}
            bg="#E82223"
            color="#fff"
            onClick={() => handleClick()}
          >
            {t("signUp")}
          </Button>
        </FormStyled>
      ) : (
        <Fragment>
          <InfoBox>
            <Username>{t("name")}</Username>
            <InformationText>E-mail: {inputMail}</InformationText>
            <InformationText>Password: {inputPassword}</InformationText>
            <InformationText>Current locale: {t("locale")}</InformationText>
          </InfoBox>
          <Input
            type="text"
            readOnly
            placeholder={t("language")}
            label={t("locale")}
            value={t("language")}
          />
          <Button
            className="logOut"
            type="submit"
            isDisabled={inputMail && inputPassword}
            bg="#fff"
            color="#E82223"
            onClick={() => logOut()}
          >
            {t("logOut")}
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default withTranslation()(Login);
