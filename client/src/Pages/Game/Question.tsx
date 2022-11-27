import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { Button, Input, Modal } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import ishihara from '../../data/ishihara-desc';

type QuestionProps = {
  correctAnswers: number;
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
};

const Question: FC<QuestionProps> = (props) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState<number | string>('');
  const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();

  const answerCheck = () => {
    if (!answer) {
      return setAlertOpen(true);
    }

    const data = ishihara.find((obj) => {
      return obj.id === questionNumber;
    });

    if (answer == data?.answer) {
      props.setCorrectAnswers(props.correctAnswers + 1);
    }

    setQuestionNumber(questionNumber + 1);

    setAnswer('');
  };

  useEffect(() => {
    if (questionNumber >= 17) {
      navigate('/result');

      return;
    }
  }, [questionNumber]);

  return (
    <div className="flex-items items-center justify-center w-full h-full">
      <img className="flex flex-items items-center justify-center w-60" src={`/images/ishihara/${questionNumber}.png`} alt={`Question number ${questionNumber}`} />

      <div className="form-control w-full max-w-xs flex flex-items items-center justify-center">
        <label className="label flex flex-items items-center justify-center">
          <span className="label-text">Tuliskan angka yang terlihat</span>
        </label>

        <Input type="number" onChange={(event) => setAnswer(event.target.value)} value={answer} autoFocus />
      </div>
      <div className="flex flex-items items-center justify-center">
        <Button variant="outline" onClick={answerCheck}>
          Lanjut
        </Button>
      </div>

      <div>question: {questionNumber}</div>
      <div>correct: {props.correctAnswers}</div>

      <Modal open={alertOpen} onClickBackdrop={() => setAlertOpen(false)}>
        <Modal.Header className="font-bold">ERROR</Modal.Header>

        <Modal.Body>Silakan isi terlebih dahulu</Modal.Body>
      </Modal>
    </div>
  );
};

export default Question;
