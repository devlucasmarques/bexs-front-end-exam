const strSeparate = (str: string, value: string, every: number): string => {
  let res = '';
  for (let i = 0; i < str.length; i += every) {
    res += str.slice(i, i + 4) + value;
  }
  return res.trim();
};

const isValidDate = (str: string): boolean => {
  let now = new Date().toLocaleDateString('en-us', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });
  now = now[0] + now[1] + '/01/' + now[6] + now[7];
  const val = str[0] + str[1] + '/01/' + str[2] + str[3];
  const d1 = new Date(now).getTime();
  const d2 = new Date(val).getTime();
  if (isNaN(d1) || isNaN(d2)) return false;

  return d1 <= d2;
};

export { strSeparate, isValidDate };
