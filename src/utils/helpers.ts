import { Tag } from './../types/Tag';
export const getColorName = (tag: Tag) => {
  if (tag === 'study') {
    return 'pink';
  }
  if (tag === 'work') {
    return 'sky';
  }
  if (tag === 'personal') {
    return 'teal';
  }
  if (tag === 'creative') {
    return 'violet';
  }
  return 'pink';
};

export const getColor = (tag: Tag) => {
  if (tag === 'study') {
    return '#db2777';
  }
  if (tag === 'work') {
    return '#7c3aed';
  }
  if (tag === 'personal') {
    return '#0d9488';
  }
  if (tag === 'creative') {
    return '#0284c7';
  }
  return '#db2777';
};
