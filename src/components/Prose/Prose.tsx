import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type ProseProps = {
  className?: string;
  children?: ReactNode;
};

export const Prose: FC<ProseProps> = ({ className, children }) => {
  return <div className={clsx(className, 'prose prose-slate')}>{children}</div>;
};
