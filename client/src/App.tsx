import { FC, ReactNode, useState } from 'react';
import { Drawer } from 'react-daisyui';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import About from './Pages/About';
import Question from './Pages/Game/Question';
import Result from './Pages/Game/Result';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const [questionNumber, setQuestionNumber] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <Drawer side={<Sidebar setVisible={setVisible} />} open={visible} onClickOverlay={toggleVisible} className="font-sans">
      <div className="flex h-screen flex-col">
        <Navbar toggleVisible={toggleVisible} />

        <main className="container flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/question" element={<Question questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} />} />
            <Route path="/result" element={<Result questionNumber={questionNumber} correctAnswers={correctAnswers} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      {/* Breakpoints Indicator */}
      <div
        className="fixed bottom-[5%] left-1/2 z-[10000] rounded-3xl font-mono"
        style={{
          background: 'rgba(247, 201, 241, 0.4)',
          transform: 'translate(-50%, -50%)',
          padding: '.5rem 1rem',
        }}
      >
        <div className="block sm:hidden">Extra Small (xs)</div>
        <div className="hidden sm:block md:hidden">Small (sm)</div>
        <div className="hidden md:block lg:hidden">Medium (md)</div>
        <div className="hidden lg:block xl:hidden">Large (lg)</div>
        <div className="hidden xl:block 2xl:hidden">X-Large (xl)</div>
        <div className="hidden 2xl:block">2X-Large (xxl)</div>
      </div>
    </Drawer>
  );
};

export default App;
