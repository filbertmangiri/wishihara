import { IconHome, IconInfoSquare } from '@tabler/icons';
import { FC } from 'react';
import { Menu } from 'react-daisyui';
import { NavLink } from 'react-router-dom';

type SidebarProps = {};

const SidebarLayout: FC<SidebarProps> = (props) => {
  return (
    <aside className="component-preview flex w-fit max-w-[calc(3/4_*_100vw)] flex-col items-start justify-between rounded-r-3xl bg-base-200 font-sans">
      <Menu className="rounded-box w-full gap-y-1 px-2 py-10">
        <h1 className="mb-10 text-center">Wishihara</h1>

        <Menu.Item>
          <NavLink to="/">
            <IconHome />
            Beranda
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink to="/about">
            <IconInfoSquare />
            Tentang Kami
          </NavLink>
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default SidebarLayout;
