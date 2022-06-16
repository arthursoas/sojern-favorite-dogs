import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarCotainer, NavbarOption } from './styles';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <NavbarCotainer>
      <NavbarOption
        bold={location.pathname === '/'}
        onClick={(_) => {navigateTo('/')}}>🐶 Home
      </NavbarOption>
      <NavbarOption
        bold={location.pathname === '/favorites'}
        onClick={(_) => {navigateTo('/favorites')}}>❤️ Favorites
      </NavbarOption>
    </NavbarCotainer>
  );
};
