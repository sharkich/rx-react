import { FC, useState } from 'react';

export const SizeForm: FC = () => {
  const [value, setValue] = useState(``);

  const onSubmit = () => {
    setValue('');
  };
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
