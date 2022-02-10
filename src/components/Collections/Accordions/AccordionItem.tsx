import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleComplete } from '../../../redux/reducers/CollectionsSlice';
import { ITask } from '../../../types/ICollection';

interface AccordionItemProps {
  task: ITask;
  color: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ task, color }) => {
  const dispatch = useAppDispatch();
  const handleComplete = () => {
    dispatch(toggleComplete({ collectionId: task.collectionId, id: task.id }));
  };

  return (
    <div
      className={`flex w-full cursor-pointer flex-row bg-zinc-800 p-4`}
      onClick={() => handleComplete()}
    >
      <div
        className={`mr-2 h-6 w-6 flex-none rounded-lg border-2 border-${color}-600`}
      ></div>

      <div className='flex flex-wrap '>
        <p className='mb-1 text-white'>{task.description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
