import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="px-[128px] pr-[148px]">
      {children}
    </div>
  );
};

export default Wrapper;
