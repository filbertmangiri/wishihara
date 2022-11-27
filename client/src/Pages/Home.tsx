import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import front from '../assets/images/front.png';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <div className="root h-full w-full items-center justify-center">
      <div className="avatar flex h-full w-full items-center justify-center">
        <div className="w-60 rounded-full">
          <img src= {front}
          />
        </div>
      </div>

      <div className="Start_Button flex items-center justify-center">
        <Link to="/question" className="btn-outline btn">
          Start
        </Link>
      </div>
    </div>
  );
};

export default Home;
