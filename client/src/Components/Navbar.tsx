import React, { FC } from 'react';
import { Button, Navbar } from 'react-daisyui';
import { IconMenu2 } from '@tabler/icons';
import { NavLink } from 'react-router-dom';

type NavbarProps = {
  toggleVisible: () => void;
};

const NavbarLayout: FC<NavbarProps> = (props) => {
  return (
    <Navbar className="container">
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

      <Navbar.End>
        <Button color="ghost" className="avatar" shape="circle">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" alt="Foto profil saya" />
          </div>
        </Button>
      </Navbar.End>
    </Navbar>
  );
};

export default NavbarLayout;
