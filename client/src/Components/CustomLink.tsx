import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

type CustomNavLinkProps = {
  to: string;
  children: ReactNode;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const CustomNavLink: FC<CustomNavLinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      onClick={() => {
        props.setVisible(false);
      }}
    >
      {props.children}
    </NavLink>
  );
};

export default CustomNavLink;
