import { ReactNode, forwardRef } from 'react';

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ className, children }, ref) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  },
);
