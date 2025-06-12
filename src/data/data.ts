interface SunData {
  time_tag: string;
  density: string;
  speed: string;
  temperature: string;
}

export const getSunData = (data: string[][]) => {
  const newData: SunData[] = [];
  const indexes = data.shift();
  const values = data.pop();

  if (indexes && values) {
    for (let i = 0; i < indexes?.length; i++) {
      newData.push({ [indexes[i]]: values[i] });
    }
    return newData;
  } else return;
};
