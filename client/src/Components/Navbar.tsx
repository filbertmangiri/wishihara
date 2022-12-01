import React, { FC } from 'react';
import { Button, Navbar } from 'react-daisyui';
import { IconMenu2 } from '@tabler/icons';
import { NavLink } from 'react-router-dom';

type NavbarProps = {
  className?: string;
  toggleVisible: () => void;
};

const NavbarLayout: FC<NavbarProps> = (props) => {
  return (
    <Navbar className={`${props.className} container`}>
      <Navbar.Start>
        <Button color="ghost" shape="circle" tabIndex={0} onClick={props.toggleVisible}>
          <IconMenu2 />
        </Button>
      </Navbar.Start>

      <Navbar.Center>
        <NavLink to="/">
          <Button color="ghost" className="text-xl normal-case">
            Wishihara
          </Button>
        </NavLink>
      </Navbar.Center>

      <Navbar.End />
    </Navbar>
  );
};

export default NavbarLayout;
