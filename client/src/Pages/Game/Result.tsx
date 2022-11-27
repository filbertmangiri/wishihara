import React, { FC } from 'react';

type ResultProps = {
  questionNumber: number;
  correctAnswers: number;
};

const Result: FC<ResultProps> = (props) => {
  return (
    <div>
      {props.questionNumber ? (
        <div>
          <span>RESULT : {props.correctAnswers}</span>
        </div>
      ) : (
        <div>
          <span>Silakan menjawab test nya terlebih dahulu</span>
        </div>
      )}
    </div>
  );
};

export default Result;
