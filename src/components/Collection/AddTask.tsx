import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addTask } from '../../redux/reducers/CollectionsSlice';

interface AddTaskProps {
  color: string;
  id: number;
}

const AddTask: React.FC<AddTaskProps> = ({ color, id }) => {
  const [input, setInput] = useState('');

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInput(e.target.value);
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.replaceAll(' ', '')) {
      setInput(input.replaceAll(' ', ''));
    }
    if (input.replaceAll(' ', '')) {
      dispatch(addTask({ id, description: input }));
      setInput('');
    }
  };
  return (
    <div className='mb-5'>
      <form className='relative flex items-center' onSubmit={handleSubmit}>
        <div
          className={`absolute left-2 flex h-6 w-6  rounded-lg bg-${color}-600 cursor-pointer`}
          onClick={handleSubmit}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </div>
        <input
          type='text'
          value={input}
          onChange={handleInput}
          placeholder='Add a task'
          className='w-full rounded-lg border-2 border-zinc-800 bg-zinc-900 p-1 pl-10 text-white focus:border-zinc-500 focus:outline-none'
        />
      </form>
    </div>
  );
};

export default AddTask;
