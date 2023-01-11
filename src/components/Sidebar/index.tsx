import { useContext, useState, useRef } from "react";

import * as S from "./styles";

import logoSVG from "../../assets/logo.svg";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    notification: 0,
    to: "/",
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    notification: 3,
    to: "/statistics",
  },
  {
    label: "Customers",
    icon: <BsPeople />,
    notification: 0,
    to: "/students",
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    notification: 5,
    to: "/diagrams",
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

export function Sidebar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const searchRef = useRef<HTMLInputElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
      // focus on input
      searchRef.current?.focus();
    } else {
      // search funcionality
    }
  };

  return (
    <S.Sidebar isOpen={isSidebarOpen}>
      <>
        <S.SidebarButton
          isOpen={isSidebarOpen}
          onClick={() => setIsSidebarOpen((prev: boolean) => !prev)}
        >
          <AiOutlineLeft />
        </S.SidebarButton>
      </>
      <S.Logo>
        <img src={logoSVG} />
      </S.Logo>
      <S.Search
        style={!isSidebarOpen ? { width: `fit-content` } : {}}
        onClick={searchClickHandler}
      >
        <S.SearchIcon>
          <AiOutlineSearch />
        </S.SearchIcon>
        <input
          ref={searchRef}
          placeholder="Pesquisar"
          style={!isSidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </S.Search>
      <S.Divider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <S.LinkContainer key={label} isActive={pathname === to}>
          <S.SLink
            to={to}
            style={!isSidebarOpen ? { width: `fit-content` } : {}}
          >
            <S.LinkIcon>{icon}</S.LinkIcon>
            {isSidebarOpen ? (
              <>
                <S.LinkLabel>{label}</S.LinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notification && (
                  <S.LinkNotification>{notification}</S.LinkNotification>
                )}
              </>
            ) : null}
          </S.SLink>
        </S.LinkContainer>
      ))}
      <S.Divider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <S.LinkContainer key={label}>
          <S.SLink
            to={"/"}
            style={isSidebarOpen ? { width: `fit-content` } : {}}
          >
            <S.LinkIcon>{icon}</S.LinkIcon>
            {isSidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
          </S.SLink>
        </S.LinkContainer>
      ))}
      <S.Divider />
      <S.Theme>
        {isSidebarOpen && <S.ThemeLabel>Dark Mode</S.ThemeLabel>}
        <S.ThemeToggler
          isActive={theme === "dark"}
          onClick={() =>
            setTheme((prev: any) => (prev === "light" ? "dark" : "light"))
          }
        >
          <S.ToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </S.ThemeToggler>
      </S.Theme>
    </S.Sidebar>
  );
}
