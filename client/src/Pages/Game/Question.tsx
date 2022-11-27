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
    if (questionNumber >= 14) {
      navigate('/result');

      return;
    }
  }, [questionNumber]);

  return (
    <div>
      <img src={`/images/ishihara/${questionNumber}.png`} alt={`Question number ${questionNumber}`} />

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Tuliskan angka yang terlihat</span>
        </label>

        <Input type="number" onChange={(event) => setAnswer(event.target.value)} value={answer} autoFocus />
      </div>

      <Button variant="outline" onClick={answerCheck}>
        Lanjut
      </Button>

      <div>question: {questionNumber}</div>
      <div>correct: {props.correctAnswers}</div>

      <Modal open={alertOpen} onClickBackdrop={() => setAlertOpen(false)}>
        <Modal.Header className="font-bold">ERROR</Modal.Header>

        <Modal.Body>Jawab dulu kali soalnya bang</Modal.Body>
      </Modal>
    </div>
  );
};

export default Question;
