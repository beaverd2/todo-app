import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {
  deleteCollection,
  deleteCompleted,
  toggleFavourite,
} from '../../redux/reducers/CollectionsSlice';
import { useNavigate } from 'react-router-dom';

interface DropDownProps {
  id: number;
  handleModal: () => void;
  isFavourite: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  id,
  handleModal,
  isFavourite,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteCollection(id));
    navigate('/');
  };
  const handleFavourite = () => {
    dispatch(toggleFavourite(id));
  };
  const handleClear = () => {
    dispatch(deleteCompleted(id));
  };

  return (
    <div className='invisible absolute right-0 top-8 z-10 opacity-0 transition-all group-hover:visible group-hover:opacity-100 '>
      <div className='z-10 space-y-1 rounded-lg bg-zinc-700 py-2 text-white shadow-xl '>
        <p
          className='cursor-pointer p-2 transition-colors hover:bg-zinc-600'
          onClick={handleModal}
        >
          Rename collection
        </p>
        <p
          className='cursor-pointer p-2 transition-colors hover:bg-zinc-600'
          onClick={handleFavourite}
        >
          Make {isFavourite ? 'unfavorite' : 'favourite'}
        </p>
        <p
          className='cursor-pointer p-2 transition-colors hover:bg-zinc-600'
          onClick={handleClear}
        >
          Clear completed
        </p>
        <p
          className='cursor-pointer p-2 transition-colors hover:bg-zinc-600'
          onClick={handleDelete}
        >
          Delete collection
        </p>
      </div>
    </div>
  );
};

export default DropDown;
