import React, { FC } from 'react';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <div className="root justify-center items-center w-full h-full">
      <div className="avatar flex justify-center items-center w-full h-full">
        <div className="w-60 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>

      <div className="Start_Button flex justify-center items-center">
        <button className="btn btn-outline">Start</button>
      </div>
    </div>
  );
};

export default Home;
