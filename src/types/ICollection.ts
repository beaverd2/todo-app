import { Tag } from './Tag';

export interface ITask {
  collectionId: number;
  id: number;
  description: string;
  isCompleted: boolean;
}

export interface ICollection {
  id: number;
  title: string;
  tag: Tag;
  isFavourite: boolean;
  tasks: ITask[];
}
