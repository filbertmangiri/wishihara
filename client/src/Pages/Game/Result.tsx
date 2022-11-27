import React, { FC } from 'react';

type ResultProps = {
  questionNumber: number;
  correctAnswers: number;
};

const Result: FC<ResultProps> = (props) => {
  const result: {
    percentage: number;
    diagnosis: 'normal' | 'mild' | 'moderate' | 'severe';
  } = {
    percentage: 0,
    diagnosis: 'normal',
  };

  const wrongAnswers = 17 - props.correctAnswers;

  if (wrongAnswers <= 3) {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'normal';
  } else if (wrongAnswers <= 6) {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'mild';
  } else if (wrongAnswers <= 12) {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'moderate';
  } else {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'severe';
  }

  return (
    <div>
      {props.questionNumber ? (
        <div>
          <h3>Percentage : {result.percentage.toFixed(2)}</h3>
          <h3>Diagnosis : {result.diagnosis}</h3>
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
