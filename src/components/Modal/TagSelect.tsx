import React from 'react';
import { Tag } from '../../types/Tag';
import CollectionsIcon from '../CollectionsIcon';

interface TagSelectProps {
  tag: Tag;
  handleTagSelect: (tag: Tag) => void;
}

const tags: Tag[] = ['personal', 'study', 'work', 'creative'];

const TagSelect: React.FC<TagSelectProps> = ({ tag, handleTagSelect }) => {
  return (
    <div className='group mb-6 flex items-center'>
      <button
        type='button'
        className=' mr-2 flex items-center rounded-lg border-2 border-zinc-700 p-2 text-gray-400'
      >
        <CollectionsIcon h={6} w={6} variant={tag} />
        <p className='ml-1'>{tag}</p>
      </button>
      <div className='flex w-0 -translate-x-3 space-x-2 opacity-0 transition-all group-hover:w-auto group-hover:translate-x-0 group-hover:opacity-100'>
        {tags.map((tag) => (
          <CollectionsIcon
            key={tag}
            variant={tag}
            hover={true}
            onClick={() => handleTagSelect(tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default TagSelect;
