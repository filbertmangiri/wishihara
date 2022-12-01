import React, { FC } from 'react';
import { Table } from 'react-daisyui';
import { Link } from 'react-router-dom';

type ResultProps = {
  questionNumber: number;
  correctAnswers: number;
  answers: Answer[];
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
      {props.questionNumber > 1 ? (
        <div>
          <h3>Percentage : {result.percentage.toFixed(2)}</h3>
          <h3>Diagnosis : {result.diagnosis}</h3>

          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <span>Nomor</span>
                <span>Input</span>
                <span>Jawaban</span>
              </Table.Head>

              <Table.Body>
                {props.answers.map((answer) => (
                  <Table.Row key={answer.number} hover>
                    <span>{answer.number}</span>
                    <span>{answer.input}</span>
                    <span>{answer.correct}</span>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-5">
          <span>Silakan menjawab test nya terlebih dahulu</span>

          <Link to="/question" className="btn-outline btn">
            Mulai Tes Sekarang
          </Link>
        </div>
      )}
    </div>
  );
};

export default Result;
