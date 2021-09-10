import { FC, useEffect, useState } from 'react';

interface Props {
  start: number;
  hovered: boolean;
}

export const Timer: FC<Props> = ({ start, hovered }) => {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    setTimer(start);
  }, [start]);

  setInterval(() => {
    if (hovered) {
      setTimer((value) => value + 1);
    }
  }, 10);

  return <div>{timer}</div>;
};
