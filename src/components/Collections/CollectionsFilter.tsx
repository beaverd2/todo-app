import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setFilter } from '../../redux/reducers/FilterSlice';

interface CollectionsFilterProps {
  filter: 'favourite' | 'all';
}

const CollectionsFilter: React.FC<CollectionsFilterProps> = ({ filter }) => {
  const dispatch = useAppDispatch();

  const handleFavourite = () => {
    dispatch(setFilter({ filter: 'favourite' }));
  };
  const handleAll = () => {
    dispatch(setFilter({ filter: 'all' }));
  };
  return (
    <div className='mt-14 w-full space-x-4'>
      <button
        className={`rounded-xl border-2 border-zinc-700 p-2 text-sm text-white transition-colors hover:bg-zinc-700 ${
          filter === 'favourite' ? 'bg-zinc-700' : ''
        }`}
        onClick={handleFavourite}
      >
        Favourite
      </button>
      <button
        className={`rounded-xl border-2 border-zinc-700 p-2 text-sm text-white transition-colors hover:bg-zinc-700 ${
          filter === 'all' ? 'bg-zinc-700' : ''
        }`}
        onClick={handleAll}
      >
        All Collections
      </button>
    </div>
  );
};

export default CollectionsFilter;
