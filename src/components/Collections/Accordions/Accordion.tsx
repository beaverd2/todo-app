import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ICollection } from '../../../types/ICollection';
import AccordionItem from './AccordionItem';
import CollectionsIcon from '../../CollectionsIcon';
import { getColorName } from '../../../utils/helpers';

interface AccordionProps {
  collection: ICollection;
}

const Accordion: React.FC<AccordionProps> = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(true);
  const color = getColorName(collection.tag);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex flex-col'>
      <div
        className='flex cursor-pointer items-center rounded-t-lg bg-zinc-700/60 p-4'
        onClick={handleOpen}
      >
        <CollectionsIcon variant={collection.tag} />
        <p className='ml-4 truncate text-2xl text-white'>{collection.title}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`ml-auto h-6 w-6 text-white/50 transition-transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 15l7-7 7 7'
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[9999px]' : 'max-h-0'
        }`}
      >
        {collection.tasks
          .filter((task) => task.isCompleted === false)
          .map((task) => (
            <AccordionItem key={task.id} color={color} task={task} />
          ))}
      </div>
      <Link to={`/${collection.id}`}>
        <div className='group flex items-center justify-center rounded-b-lg border-t border-zinc-700/40 bg-zinc-800 p-2 text-xl text-white'>
          Go to Collection
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-4 h-6 w-6 text-white/50 transition-transform group-hover:translate-x-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Accordion;
