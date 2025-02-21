import { HashRouter } from "react-router-dom";
import { HeaderContainer, NavLink, HomeLink, LanguageSelector } from "./styles";
import { AvatarHeader } from "../Avatar/avatar";
import i18n from "../../utils/i18n";
import { t } from "i18next";

export default function Header() {
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };
  return (
    <HashRouter>
      <HeaderContainer>
        <HomeLink href="/">
          <AvatarHeader src="https://avatars.githubusercontent.com/u/53719063?v=4" alt="Giv's Gh picture" />
          Giv's Website
        </HomeLink>
        <nav>
          <NavLink href="#about">{t("about")}</NavLink>
          <NavLink href="#contact">{t("contact")}</NavLink>
          <NavLink href="#projects">{t("projects")}</NavLink>
        <LanguageSelector onChange={changeLanguage}>
          <option value="pt-br">
            Português
          </option>
          <option value="en-us">
            English
          </option>
        </LanguageSelector>
        </nav>
      </HeaderContainer>
    </HashRouter>
  )
}