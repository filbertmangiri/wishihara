import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { Button, Input, Modal } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import ishihara from '../../data/ishihara-desc';

type QuestionProps = {
  correctAnswers: number;
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
  questionNumber: number;
  setQuestionNumber: Dispatch<SetStateAction<number>>;
};

const Question: FC<QuestionProps> = (props) => {
  const [answer, setAnswer] = useState<number | string>('');
  const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();

  const answerCheck = () => {
    if (!answer) {
      return setAlertOpen(true);
    }

    const data = ishihara.find((obj) => {
      return obj.id === props.questionNumber;
    });

    if (answer == data?.answer) {
      props.setCorrectAnswers(props.correctAnswers + 1);
    }

    props.setQuestionNumber(props.questionNumber + 1);

    setAnswer('');
  };

  useEffect(() => {
    if (props.questionNumber >= 17) {
      navigate('/result');

      return;
    }
  }, [props.questionNumber]);

  return (
    <div className="flex-items h-full w-full items-center justify-center">
      <img className="flex-items flex w-60 items-center justify-center" src={`/images/ishihara/${props.questionNumber}.png`} alt={`Question number ${props.questionNumber}`} />

      <div className="flex-items form-control flex w-full max-w-xs items-center justify-center">
        <label className="flex-items label flex items-center justify-center">
          <span className="label-text">Tuliskan angka yang terlihat</span>
        </label>

        <Input type="number" onChange={(event) => setAnswer(event.target.value)} value={answer} autoFocus />
      </div>
      <div className="flex-items flex items-center justify-center">
        <Button variant="outline" onClick={answerCheck}>
          Lanjut
        </Button>
      </div>

      <div>question: {props.questionNumber}</div>
      <div>correct: {props.correctAnswers}</div>

      <Modal open={alertOpen} onClickBackdrop={() => setAlertOpen(false)}>
        <Modal.Header className="font-bold">ERROR</Modal.Header>

        <Modal.Body>Silakan isi terlebih dahulu</Modal.Body>
      </Modal>
    </div>
  );
};

export default Question;
