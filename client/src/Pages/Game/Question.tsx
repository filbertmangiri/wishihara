import React, { Dispatch, FC, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'react-daisyui';
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

  const answerCheck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    if (props.questionNumber > 17) {
      navigate('/result');

      return;
    }
  }, [props.questionNumber]);

  return (
    <>
      <Form onSubmit={answerCheck} className="flex w-full flex-col items-center justify-center gap-y-6">
        <div className="avatar">
          <div className="h-56 rounded">
            <img src={`/images/ishihara/${props.questionNumber}.png`} alt={`Question number ${props.questionNumber}`} />
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text">Tuliskan angka yang terlihat</span>
          </label>

          <Input type="number" onChange={(event) => setAnswer(event.target.value)} value={answer} autoFocus />
        </div>

        <Button type="submit" variant="outline">
          Berikutnya
        </Button>
      </Form>

      <Modal open={alertOpen} onClickBackdrop={() => setAlertOpen(false)}>
        <Modal.Header className="font-bold">ERROR</Modal.Header>

        <Modal.Body>Silakan isi terlebih dahulu</Modal.Body>
      </Modal>
    </>
  );
};

export default Question;
