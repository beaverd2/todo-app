import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {
  addCollection,
  renameCollection,
} from '../../redux/reducers/CollectionsSlice';
import { Tag } from '../../types/Tag';
import TagSelect from './TagSelect';

interface ModalProps {
  handleModal: () => void;
  type: 'new' | 'rename';
  id?: number;
  tag?: Tag;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  handleModal,
  type,
  id,
  tag = 'personal',
  title = '',
}) => {
  const [input, setInput] = useState(title);
  const [tagSelect, setTagSelect] = useState(tag);

  const dispatch = useAppDispatch();

  const handleTagSelect = (tag: Tag) => {
    setTagSelect(tag);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInput(e.target.value);
  };
  const handleAddCollection = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.replaceAll(' ', '')) {
      setInput(input.replaceAll(' ', ''));
    }
    if (input.replaceAll(' ', '')) {
      dispatch(addCollection({ title: input, tag: tagSelect }));
      setInput('');
      handleModal();
    }
  };
  const handleRenameCollection = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.replaceAll(' ', '')) {
      setInput(input.replaceAll(' ', ''));
    }
    if (input.replaceAll(' ', '') && id) {
      dispatch(
        renameCollection({ id: id, newTitle: input, newTag: tagSelect })
      );
      setInput('');
      handleModal();
    }
  };

  const handleUserKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setInput('');
        handleModal();
      }
    },
    [handleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => window.removeEventListener('keydown', handleUserKeyPress);
  }, [handleUserKeyPress]);

  return (
    <div
      className='fixed inset-0 z-20 flex items-end justify-center bg-black/40 sm:items-center'
      onClick={handleModal}
    >
      <div
        className='w-full rounded-t-2xl bg-zinc-800 px-4 py-6 text-white sm:max-w-md sm:rounded-2xl md:max-w-xl'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form
          className='flex flex-col items-start'
          onSubmit={
            type === 'new' ? handleAddCollection : handleRenameCollection
          }
        >
          <input
            type='text'
            required
            autoFocus
            value={input}
            onChange={handleInput}
            placeholder='New collection name'
            className='mb-4 w-full rounded-lg border-2 border-zinc-700 bg-zinc-800 p-2 text-white invalid:border-red-500 invalid:text-red-600 focus:border-zinc-500 focus:outline-none'
          />
          <TagSelect tag={tagSelect} handleTagSelect={handleTagSelect} />
          <div className='flex w-full '>
            <button
              type='submit'
              className='mr-4 basis-1/2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 sm:basis-auto'
            >
              {type === 'new' ? 'Add collection' : 'Rename collection'}
            </button>
            <button
              className='basis-1/2 rounded-lg bg-zinc-700 px-6 py-2 transition-colors hover:bg-zinc-600 sm:basis-auto'
              onClick={handleModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
