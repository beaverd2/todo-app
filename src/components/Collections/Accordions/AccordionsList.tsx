import React from 'react';
import { ICollection } from '../../../types/ICollection';
import Accordion from './Accordion';

interface AccordionsListProps {
  collections: ICollection[];
}

const AccordionsList: React.FC<AccordionsListProps> = ({ collections }) => {
  return (
    <div className='mt-6 flex flex-col space-y-4'>
      {collections
        .filter((collection) => collection.isFavourite === true)
        .map((collection) => (
          <Accordion key={collection.id} collection={collection} />
        ))}
    </div>
  );
};

export default AccordionsList;
