import clsx from 'clsx';
import { FC } from 'react';

type CheckBoxIcon = {
  className?: string;
  isActive: boolean;
};

const CheckBoxIcon: FC<CheckBoxIcon> = ({ className, isActive }) => {
  return (
    <span
      className={clsx(className, 'relative h-6 w-6', {
        'bg-slate-200': !isActive,
        'bg-slate-700': isActive,
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

export default CheckBoxIcon;
