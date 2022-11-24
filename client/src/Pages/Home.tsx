import React, { FC } from 'react';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <div>
      <div className="avatar flex justify-center items-center h-full">
        <div className="w-60 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>

      <div className="Start_Button mt-5 flex justify-center items-center">
        <button className="btn btn-outline">Start</button>
      </div>
    </div>
  );
};

export default Home;
