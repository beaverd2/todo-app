import React from 'react';

interface AddCollectionsItemProps {
  handleModal: () => void;
}

const AddCollectionsItem: React.FC<AddCollectionsItemProps> = ({
  handleModal,
}) => {
  return (
    <div
      className='flex h-20 w-full cursor-pointer items-center justify-center rounded-2xl border-4 border-zinc-800/80'
      onClick={handleModal}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 text-zinc-500/80'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 4v16m8-8H4'
        />
      </svg>
    </div>
  );
};

export default AddCollectionsItem;
