import React from 'react';

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct = 100 }: { color: string; pct?: number }) => {
  const r = 8;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={12.5}
      cy={12.5}
      fill='transparent'
      stroke={strokePct !== circ ? color : ''} // remove color as 0% sets full circumference
      strokeWidth={'0.2rem'}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap='round'
    ></circle>
  );
};

const Pie = ({ percentage, color }: { color: string; percentage: number }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={25} height={25}>
      <g transform={`rotate(-90 ${'12.5 12.5'})`}>
        <Circle color='#71717a' />
        <Circle color={color} pct={pct} />
      </g>
    </svg>
  );
};

export default Pie;
