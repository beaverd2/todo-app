import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { toggleFavourite } from '../../redux/reducers/CollectionsSlice';
import { ICollection } from '../../types/ICollection';
import ProgressRing from '../ProgressRing';
import CollectionsIcon from '../CollectionsIcon';
import { getColor, getColorName } from '../../utils/helpers';

interface CollectionsItemProps {
  collection: ICollection;
}

const CollectionsItem: React.FC<CollectionsItemProps> = ({ collection }) => {
  const dispatch = useAppDispatch();

  const handleToggle = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(toggleFavourite({ id: collection.id }));
  };

  const collectionLenght = collection.tasks.length;
  const completedCount = collection.tasks.filter(
    (task) => task.isCompleted
  ).length;

  const color = getColor(collection.tag);
  const colorName = getColorName(collection.tag);
  return (
    <Link to={collection.id.toString()}>
      <div className='cursor-pointer  flex-col rounded-2xl  bg-zinc-800 p-4 '>
        <div className='mb-6 flex justify-between'>
          <CollectionsIcon variant={collection.tag} />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-5 w-5
            ${
              collection.isFavourite ? 'text-yellow-400' : 'text-zinc-700'
            } transition-colors ${
              collection.isFavourite
                ? 'md:hover:text-yellow-400/50'
                : 'md:hover:text-yellow-400 '
            }`}
            viewBox='0 0 20 20'
            fill='currentColor'
            onClick={(e) => handleToggle(e)}
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        </div>
        <div className='flex-col'>
          <p className='mb-2 truncate text-2xl text-white'>
            {collection.title}
          </p>
          <div className='flex items-center justify-between '>
            <p className='text-xs text-white/50'>
              {completedCount}/{collectionLenght} done
            </p>
            {collection.tasks.length > 0 &&
            collection.tasks.every((task) => task.isCompleted === true) ? (
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-${colorName}-600 ring ring-${colorName}-600/60`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 text-white'
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
              </div>
            ) : (
              <ProgressRing
                percentage={(completedCount / collectionLenght) * 100}
                color={color}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionsItem;
