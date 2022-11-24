import { IconHome, IconInfoSquare } from '@tabler/icons';
import { Dispatch, FC, SetStateAction } from 'react';
import { Menu } from 'react-daisyui';
import CustomNavLink from './CustomLink';

type SidebarProps = {
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const SidebarLayout: FC<SidebarProps> = (props) => {
  return (
    <aside className="component-preview flex w-fit max-w-[calc(3/4_*_100vw)] flex-col items-start justify-between rounded-r-3xl bg-base-200 font-sans">
      <Menu className="rounded-box w-full gap-y-1 px-2 py-10">
        <h1 className="mb-10 text-center">Wishihara</h1>

        <Menu.Item>
          <CustomNavLink to="/" setVisible={props.setVisible}>
            <IconHome />
            Beranda
          </CustomNavLink>
        </Menu.Item>

        <Menu.Item>
          <CustomNavLink to="/about" setVisible={props.setVisible}>
            <IconInfoSquare />
            Tentang Kami
          </CustomNavLink>
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default SidebarLayout;
