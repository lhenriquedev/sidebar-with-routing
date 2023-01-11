import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen?: boolean;
  isActive?: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};

  position: relative;
`;

export const SidebarButton = styled.button<SidebarProps>`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `40px`)};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const Logo = styled.div`
  width: 52px;
  img {
    max-width: 100%;
    height: auto;
  }

  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const Search = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};

  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 1rem;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }

  display: flex;
`;

export const SearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};

  display: flex;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const LinkContainer = styled.div<SidebarProps>`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const LinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 1.25rem;
  }
`;

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const LinkNotification = styled.div`
  font-size: 0.875rem;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: ${v.borderRadius};

  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${v.mdSpacing};
`;

export const Theme = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const ThemeLabel = styled.span`
  display: block;
  flex: 1;
`;

export const ThemeToggler = styled.button<SidebarProps>`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 2.25rem;
  height: 1.25rem;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bg3 : theme.primary};

  position: relative;
`;

export const ToggleThumb = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 1.125rem - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
