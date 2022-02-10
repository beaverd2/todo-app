import React, { useState } from 'react';
import CollectionsItem from './CollectionsItem';
import NewCollectionsItem from './AddCollectionsItem';
import { ICollection } from '../../types/ICollection';
import Modal from '../Modal/Modal';

interface CollectionsListProps {
  collections: ICollection[];
}

const CollectionsList: React.FC<CollectionsListProps> = ({ collections }) => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3'>
      {collections.map((collection) => (
        <CollectionsItem collection={collection} key={collection.id} />
      ))}
      <NewCollectionsItem handleModal={handleModal} />
      {isModal && <Modal handleModal={handleModal} type='new' />}
    </div>
  );
};

export default CollectionsList;
