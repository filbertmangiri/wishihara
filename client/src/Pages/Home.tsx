import React, { FC } from 'react';
import { Avatar } from 'react-daisyui';
import { Link } from 'react-router-dom';
import front from '../assets/images/front.png';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-6">
      <div className="avatar">
        <div className="w-56 rounded">
          <img src={front} />
        </div>
      </div>

      <Link to="/question" className="btn-outline btn">
        Start
      </Link>
    </div>
  );
};

export default Home;
