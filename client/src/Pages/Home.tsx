import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Button, Modal } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

type HomeProps = {
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
  questionNumber: number;
  setQuestionNumber: Dispatch<SetStateAction<number>>;
};

const Home: FC<HomeProps> = (props) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
    if (props.questionNumber >= 17) {
      setAlertOpen(true);
    } else {
      props.setCorrectAnswers(0);
      props.setQuestionNumber(1);

      navigate('/question');
    }
  };

  const handleRestart = () => {
    props.setCorrectAnswers(0);
    props.setQuestionNumber(1);

    navigate('/question');
  };

  const handleAbort = () => {
    if (props.questionNumber > 17) {
      setAlertOpen(false);
      return;
    }

    setAlertOpen(false);
  };

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-6">
        <div className="avatar">
          <div className="w-56 rounded">
            <img src="/images/brand.png" />
          </div>
        </div>

        <Button onClick={handleStart} variant="outline">
          START
        </Button>
      </div>

      <Modal open={alertOpen} onClickBackdrop={() => setAlertOpen(false)}>
        <Modal.Header className="font-bold">Peringatan</Modal.Header>

        <Modal.Body>Dengan memulai sesi baru, hasil yang sebelumnya akan hilang. Anda yakin ingin memulai?</Modal.Body>

        <Modal.Actions>
          <Button color="primary" onClick={handleRestart}>
            Oke, mulai ulang
          </Button>
          <Button color="error" onClick={handleAbort}>
            Jangan
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Home;
