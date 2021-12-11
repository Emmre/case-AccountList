import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavbarContent, IconBox } from "./styled";
import list from "../../Icons/list.svg";
import user from "../../Icons/user.svg";
import "../../translations/i18n";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <NavbarContent>
      <Link to="/myList">
        <IconBox>
          <img src={list} width={20} height={20} alt="icon" loading="lazy" />
          <span>{t("list")}</span>
        </IconBox>
      </Link>
      <Link to="/">
        <IconBox>
          <img src={user} width={20} height={20} alt="icon" loading="lazy" />
          <span>{t("account")}</span>
        </IconBox>
      </Link>
    </NavbarContent>
  );
};

export default Navbar;
