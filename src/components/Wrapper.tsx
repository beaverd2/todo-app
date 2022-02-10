import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

export default Wrapper;
