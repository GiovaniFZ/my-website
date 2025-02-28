import { HashRouter } from "react-router-dom";
import { HeaderContainer, NavLink, HomeLink, LanguageSelector } from "./styles";
import { AvatarHeader } from "../Avatar/avatar";
import i18n from "../../utils/i18n";
import { Drawer, DrawerContainer, DrawerItem } from "../Drawer/styles";
import useDrawerVisible from "../../hooks/useDrawerVisible";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };
  const { ref, openDrawer, setOpenDrawer } = useDrawerVisible();
  return (
    <>
      <HashRouter>
        <HeaderContainer ref={ref}>
          <Drawer onClick={() => setOpenDrawer(!openDrawer)} />
          <HomeLink href="/">
            <AvatarHeader src="https://avatars.githubusercontent.com/u/53719063?v=4" alt="Giv's Gh picture" />
            <span>Giv's Website</span>
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
        {openDrawer &&
          <DrawerContainer onClick={() => setOpenDrawer(false)}>
            <DrawerItem>Giv's Website</DrawerItem>
            <DrawerItem href="#about">{t("about")}</DrawerItem>
            <DrawerItem href="#contact">{t("contact")}</DrawerItem>
            <DrawerItem href="#projects">{t("projects")}</DrawerItem>
          </DrawerContainer>
        }
      </HashRouter>
    </>
  )
}