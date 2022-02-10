import React from 'react';
import { Tag } from '../types/Tag';

interface CollectionsIconProps {
  variant: Tag;
  h?: number;
  w?: number;
  hover?: boolean;
  onClick?: () => void;
}

const CollectionsIcon: React.FC<CollectionsIconProps> = ({
  variant,
  h,
  w,
  hover,
  onClick,
}) => {
  if (variant === 'study') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`${h ? 'h-' + h : 'h-9'} ${w ? 'w-' + w : 'w-9'} ${
          hover ? 'cursor-pointer' : ''
        } rounded-lg bg-pink-600 text-white`}
        viewBox='0 0 20 20'
        fill='currentColor'
        onClick={onClick}
      >
        <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
      </svg>
    );
  }
  if (variant === 'creative') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`${h ? 'h-' + h : 'h-9'} ${w ? 'w-' + w : 'w-9'} ${
          hover ? 'cursor-pointer' : ''
        } rounded-lg bg-violet-600 text-white`}
        viewBox='0 0 20 20'
        fill='currentColor'
        onClick={onClick}
      >
        <path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
      </svg>
    );
  }
  if (variant === 'personal') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`${h ? 'h-' + h : 'h-9'} ${w ? 'w-' + w : 'w-9'} ${
          hover ? 'cursor-pointer' : ''
        } rounded-lg bg-teal-600 text-white`}
        viewBox='0 0 20 20'
        fill='currentColor'
        onClick={onClick}
      >
        <path
          fillRule='evenodd'
          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
          clipRule='evenodd'
        />
      </svg>
    );
  }
  if (variant === 'work') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`${h ? 'h-' + h : 'h-9'} ${w ? 'w' + w : 'w-9'} ${
          hover ? 'cursor-pointer' : ''
        } rounded-lg bg-sky-600 text-white`}
        viewBox='0 0 20 20'
        fill='currentColor'
        onClick={onClick}
      >
        <path
          fillRule='evenodd'
          d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
        <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z' />
      </svg>
    );
  }
  return <div></div>;
};

export default CollectionsIcon;
