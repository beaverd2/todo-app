import React from 'react';
import AccordionsList from '../components/Collections/Accordions/AccordionsList';
import CollectionsFilter from '../components/Collections/CollectionsFilter';
import CollectionsList from '../components/Collections/CollectionsList';
import { useAppSelector } from '../redux/hooks';

const Collections = () => {
  const collections = [
    ...useAppSelector((state) => state.collectionsReducer.collections),
  ].sort((collection) => (collection.isFavourite ? -1 : 1));

  const filter = useAppSelector((state) => state.filterReducer.filter);

  return (
    <div className='min-h-screen bg-zinc-900'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-5xl text-white'>Collections</h2>
        </div>
        <CollectionsFilter filter={filter} />
        {filter === 'favourite' ? (
          <AccordionsList collections={collections} />
        ) : (
          <CollectionsList collections={collections} />
        )}
      </div>
    </div>
  );
};

export default Collections;
