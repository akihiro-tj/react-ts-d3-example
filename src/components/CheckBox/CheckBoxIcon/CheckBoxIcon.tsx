import clsx from 'clsx';
import { FC } from 'react';

type CheckBoxIconProps = {
  className?: string;
  checked: boolean;
};

export const CheckBoxIcon: FC<CheckBoxIconProps> = ({ className, checked }) => {
  return (
    <span
      className={clsx(className, 'relative block h-6 w-6', {
        'bg-slate-200': !checked,
        'bg-slate-700': checked,
      })}
    >
      <span
        className="block h-full w-full bg-white"
        style={{
          WebkitMaskImage: `url('img/check.svg')`,
          maskImage: `url('img/check.svg')`,
          WebkitMaskSize: '80%',
          maskSize: '80%',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />
    </span>
  );
};
