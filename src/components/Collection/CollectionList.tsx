import React from 'react';
import { ITask } from '../../types/ICollection';
import CollectionItem from './CollectionItem';

interface CollectionListProps {
  title: string;
  tasks?: ITask[];
  color: string;
}

const CollectionList: React.FC<CollectionListProps> = ({
  title,
  tasks,
  color,
}) => {
  return (
    <div className='mb-6'>
      <p className='ml-4 mb-1 text-white'>
        {title} - {tasks?.length || 0}
      </p>
      <div className='space-y-2'>
        {tasks?.map((task) => (
          <CollectionItem key={task.id} task={task} color={color} />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
