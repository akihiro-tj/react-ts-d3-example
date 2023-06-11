import clsx from 'clsx';
import { FC } from 'react';

type Item = {
  label: string;
  radius: number;
};

type Legend = {
  className?: string;
  heading: string;
  items: Item[];
};

const Legend: FC<Legend> = ({ className, heading, items }) => {
  return (
    <div className={clsx(className, 'flex items-end gap-2 sm:gap-4')}>
      <div className="text-sm">{heading}：</div>
      <ul className="flex items-end gap-3 sm:gap-5">
        {items.map(item => (
          <li key={item.label} className="flex flex-col items-center gap-1">
            <span className="text-sm">{item.label}</span>
            <span
              className="rounded-full border border-slate-700 bg-slate-300"
              style={{
                width: item.radius * 2 + 'px',
                height: item.radius * 2 + 'px',
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
