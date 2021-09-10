import { FC, useEffect, useState } from 'react';

interface Props {
  start: number;
  hovered: boolean;
}

export const Timer: FC<Props> = ({ start, hovered }) => {
  const [value, setValue] = useState(start);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hovered) {
      setTimer(
        setInterval(() => {
          setValue((val) => val + 1);
        }, 10)
      );
    } else if (timer) {
      clearInterval(timer);
    }
  }, [hovered]);

  return <div>{value}</div>;
};
