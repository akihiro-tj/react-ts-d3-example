import clsx from 'clsx';
import { FC } from 'react';

type CheckBoxLabel = {
  className?: string;
  label: string;
  color: string;
};

const CheckBoxLabel: FC<CheckBoxLabel> = ({ className, label, color }) => {
  return (
    <span className={clsx(className, 'flex items-center gap-2 py-0 pl-3')}>
      <span
        className={'h-3 w-3 rounded-full border'}
        style={{
          borderColor: color,
          backgroundColor: `${color}b3`,
        }}
      />
      <span className="text-sm font-semibold">{label}</span>
    </span>
  );
};

export default CheckBoxLabel;
