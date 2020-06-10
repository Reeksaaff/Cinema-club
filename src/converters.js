// Converting time to hours
export const Time = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Converting revenue and film budget
export const convertBudget = movieBudget => {
  const converter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return converter.format(movieBudget);
};
