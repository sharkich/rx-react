import { FC } from 'react';

import { useViewModel } from './useViewModel';

export const SizeForm: FC = () => {
  const { onSubmit, value, setValue } = useViewModel();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button
        onClick={(event) => {
          event.preventDefault();
          setValue(`${Number(value) - 1}`);
        }}
      >
        &minus;
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          setValue(`${Number(value) + 1}`);
        }}
      >
        +
      </button>
      <button type="submit">submit</button>
    </form>
  );
};
