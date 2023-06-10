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
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

export default Container;
