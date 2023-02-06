import type { ReactElement } from 'react';
import type { Exact, PathProps } from './types';

const Path = <Props extends Exact<PathProps, Props>>({
  d,
  clipPath,
  clipRule,
  fill,
  fillOpacity,
  fillRule,
  stroke,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}: Props): ReactElement => {
  return (
    <path
      d={d}
      clipPath={clipPath}
      clipRule={clipRule}
      fill={fill}
      fillOpacity={fillOpacity}
      fillRule={fillRule}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
    />
  );
};

export default Path;