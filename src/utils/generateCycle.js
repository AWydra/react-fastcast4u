const generateCycle = (period, cycle, after = false) => {
  const normalizedCycle = cycle === 'monthly' ? 'month' : 'payment';
  let normalizedPeriod = period;

  if (cycle === 'annually') {
    normalizedPeriod = after ? period * 12 + 2 : period;
  } else if (cycle === 'biennially') {
    normalizedPeriod = after ? period * 24 + 6 : period;
  }

  return `${normalizedPeriod === 1 && !after ? '' : normalizedPeriod} ${
    after ? 'month' : normalizedCycle
  }${normalizedPeriod > 1 ? 's' : ''}`;
};

export default generateCycle;
