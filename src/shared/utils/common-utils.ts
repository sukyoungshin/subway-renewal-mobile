export const formatPrice = (price: string | number) => {
  const num = typeof price === 'string' ? Number(price) : price;
  return new Intl.NumberFormat('ko-KR').format(num);
};

export const isEmptyString = (message?: string): boolean => {
  return message?.trim() === '';
};

export const getTodayTime = () => {
  const today = new Date();
  const timeString = new Intl.DateTimeFormat('kr').format(today);

  return timeString;
};
