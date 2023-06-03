import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';

type Container = {
  className?: string;
  children?: ReactNode;
};

const Container = forwardRef<HTMLDivElement, Container>(function Container(
  { className, children },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx(className, 'relative mx-auto max-w-screen-sm p-4 shadow')}
    >
      {children}
    </div>
  );
});

export default Container;
