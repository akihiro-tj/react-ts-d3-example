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
      className={clsx(
        className,
        'relative mx-3 max-w-screen-sm shadow sm:mx-auto',
      )}
    >
      {children}
    </div>
  );
});

export default Container;
