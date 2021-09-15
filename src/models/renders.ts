const DEFAULT_VALUE: { [key: string]: number } = {};

export const renders = DEFAULT_VALUE;

// @ts-ignore
window.renders = renders;

export const renderInc = (id: string) => {
  if (!renders[id]) {
    renders[id] = 1;
  } else {
    renders[id]++;
  }
};

export const rendersClear = () => {
  Object.keys(renders).forEach((key) => {
    delete renders[key];
  });
};
