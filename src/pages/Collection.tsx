import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AddTask from '../components/Collection/AddTask';
import CollectionList from '../components/Collection/CollectionList';
import DropDown from '../components/Collection/DropDown';
import Modal from '../components/Modal/Modal';
import { useAppSelector } from '../redux/hooks';
import { getColorName } from '../utils/helpers';

const Collection = () => {
  const [isModal, setIsModal] = useState(false);
  const [colorName, setColorName] = useState('pink');

  const params = useParams();
  const navigate = useNavigate();

  const collection = useAppSelector((state) =>
    state.collectionsReducer.collections.find(
      (collection) => collection.id.toString() === params.id
    )
  );

  const handleModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    if (collection) setColorName(getColorName(collection.tag));
    if (!collection) {
      navigate('/');
    }
  }, [collection, navigate]);

  return (
    <div className='min-h-screen bg-zinc-900 pb-5'>
      <div className='container mx-auto px-4 py-4'>
        <div className='relative mb-5 flex items-center'>
          <Link to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-4 h-7 w-7 cursor-pointer rounded-lg bg-zinc-800 p-1 text-white transition-colors hover:bg-zinc-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </Link>
          <h2 className='mr-auto text-3xl text-white'>{collection?.title}</h2>
          <div className='group'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 cursor-pointer text-white/70'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              />
            </svg>
            {collection?.id && (
              <DropDown
                id={collection.id}
                handleModal={handleModal}
                isFavourite={collection?.isFavourite}
              />
            )}
          </div>
        </div>
        {isModal && collection?.id && (
          <Modal
            handleModal={handleModal}
            type='rename'
            id={collection.id}
            title={collection.title}
            tag={collection.tag}
          />
        )}
        {collection?.id && <AddTask color={colorName} id={collection.id} />}
        <CollectionList
          title='Tasks'
          color={colorName}
          tasks={collection?.tasks.filter((task) => task.isCompleted === false)}
        />
        {collection?.tasks.filter((task) => task.isCompleted === true) && (
          <CollectionList
            title='Completed'
            color={colorName}
            tasks={collection?.tasks.filter(
              (task) => task.isCompleted === true
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Collection;
