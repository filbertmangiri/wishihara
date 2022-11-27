import React, { FC } from 'react';

type ResultProps = {
  correctAnswers: number;
};

const Result: FC<ResultProps> = (props) => {
  return (
    <div>
      {props.correctAnswers ? (
        <div>
          <span>RESULT : {props.correctAnswers}</span>
        </div>
      ) : (
        <div>
          <span>BELOM NGERJAIN BANG</span>
        </div>
      )}
    </div>
  );
};

export default Result;
