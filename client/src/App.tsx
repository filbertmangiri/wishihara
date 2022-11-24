import { FC, ReactNode, useState } from 'react';
import { Drawer } from 'react-daisyui';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

type AppProps = {
  children: ReactNode;
};

const App: FC<AppProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Drawer side={<Sidebar />} open={visible} onClickOverlay={toggleVisible} className="font-sans">
      <div>
        <Navbar toggleVisible={toggleVisible} />

        <main className="container py-6">{props.children}</main>
      </div>

      {/* Breakpoints Indicator */}
      {/* <div
        className="fixed bottom-[5%] left-1/2 z-[10000] rounded-3xl font-mono"
        style={{
          background: 'rgba(247, 201, 241, 0.4)',
          transform: 'translate(-50%, -50%)',
          padding: '.5rem 1rem',
        }}>
        <div className="block sm:hidden">Extra Small (xs)</div>
        <div className="hidden sm:block md:hidden">Small (sm)</div>
        <div className="hidden md:block lg:hidden">Medium (md)</div>
        <div className="hidden lg:block xl:hidden">Large (lg)</div>
        <div className="hidden xl:block 2xl:hidden">X-Large (xl)</div>
        <div className="hidden 2xl:block">2X-Large (xxl)</div>
      </div> */}
    </Drawer>
  );
};

export default App;
