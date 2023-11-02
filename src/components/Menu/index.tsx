import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  pageName: string;
  logo: string;
};

export const Menu = ({ links, pageName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close-Menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>

      <Styled.Wrapper menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={pageName} srcImg={logo} />
          </Styled.Logo>

          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
