import React, { FC } from 'react';
import { Progress, Table } from 'react-daisyui';
import { Link } from 'react-router-dom';

type ResultProps = {
  questionNumber: number;
  correctAnswers: number;
  answers: Answer[];
};

const Result: FC<ResultProps> = (props) => {
  const result: {
    percentage: number;
    diagnosis: 'Menurut tes ini, Anda tidak memiliki buta warna merah-hijau (red-green colorblind), yang artinya Anda memiliki penglihatan warna normal.' | 'Menurut tes ini, Anda memiliki buta warna merah-hijau ringan (mild red-green colorblind), yang artinya Anda memiliki defisiensi penglihatan warna ringan.' | 'Menurut tes ini, Anda memiliki buta warna merah-hijau sedang (moderate red-green colorblind), yang artinya Anda memiliki defisiensi penglihatan warna sedang.' | 'Menurut tes ini, Anda memiliki buta warna merah-hijau yang parah (severe red-green colorblind), yang artinya Anda memiliki defisiensi penglihatan warna yang parah.';
  } = {
    percentage: 0,
    diagnosis: 'Menurut tes ini, Anda tidak memiliki buta warna merah-hijau (red-green colorblind), yang artinya Anda memiliki penglihatan warna normal.',
  };

  const wrongAnswers = 17 - props.correctAnswers;

  if (wrongAnswers <= 3) {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'Menurut tes ini, Anda tidak memiliki buta warna merah-hijau (red-green colorblind), yang artinya Anda memiliki penglihatan warna normal.';
  } else if (wrongAnswers <= 6) {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'Menurut tes ini, Anda memiliki buta warna merah-hijau ringan (mild red-green colorblind), yang artinya Anda memiliki defisiensi penglihatan warna ringan.';
  } else if (wrongAnswers <= 12) {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'Menurut tes ini, Anda memiliki buta warna merah-hijau sedang (moderate red-green colorblind), yang artinya Anda memiliki defisiensi penglihatan warna sedang.';
  } else {
    result.percentage = (props.correctAnswers / 17) * 100;
    result.diagnosis = 'Menurut tes ini, Anda memiliki buta warna merah-hijau yang parah (severe red-green colorblind), yang artinya Anda memiliki defisiensi penglihatan warna yang parah.';
  }

  return (
    <div>
      {props.questionNumber > 1 ? (
        <div>
          <h3>Persentase Tidak Buta Warna : {result.percentage.toFixed(2)}%</h3>
          <h3>Diagnosis : {result.diagnosis}</h3>
          <Progress className="w-56" value={result.percentage} />

          <div className="overflow-x-auto">
            <Table className="table-compact">
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
