import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { toggleComplete } from '../../redux/reducers/CollectionsSlice';
import { ITask } from '../../types/ICollection';

interface CollectionItemProps {
  task: ITask;
  color: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ task, color }) => {
  const dispatch = useAppDispatch();
  const handleComplete = () => {
    dispatch(toggleComplete({ collectionId: task.collectionId, id: task.id }));
  };
  return (
    <div
      className='flex w-full cursor-pointer flex-row rounded-2xl bg-zinc-800 p-4'
      onClick={() => handleComplete()}
    >
      {!task.isCompleted && (
        <div
          className={`mr-2 h-6 w-6 flex-none rounded-lg border-2 border-${color}-600`}
        ></div>
      )}
      {task.isCompleted && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`mr-2 h-6 w-6 flex-none rounded-lg bg-${color}-600 text-zinc-900`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
      )}
      <div className='flex flex-wrap '>
        <p
          className={`mb-1 break-all text-white ${
            task.isCompleted ? 'line-through' : ''
          }`}
        >
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default CollectionItem;
