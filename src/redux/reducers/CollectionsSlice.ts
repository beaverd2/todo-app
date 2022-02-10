import { ICollection } from './../../types/ICollection';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollectionsState {
  collections: ICollection[];
}

const initialState: CollectionsState = {
  collections: [
    {
      id: 1644264539950,
      title: 'School',
      tag: 'study',
      isFavourite: true,
      tasks: [
        {
          collectionId: 1644264539950,
          id: 1,
          description:
            'Finish the essay collaboration, finish the essay collaboration',
          isCompleted: false,
        },
        {
          collectionId: 1644264539950,
          id: 2,
          description: 'Read next chapter of the book',
          isCompleted: false,
        },
        {
          collectionId: 1644264539950,
          id: 3,
          description: 'Do the math for next monday',
          isCompleted: false,
        },
        {
          collectionId: 1644264539950,
          id: 4,
          description: 'Read english book',
          isCompleted: false,
        },
        {
          collectionId: 1644264539950,
          id: 5,
          description: 'Finish the essay collaboration',
          isCompleted: true,
        },
        {
          collectionId: 1644264539950,
          id: 6,
          description: 'Finish the essay collaboration',
          isCompleted: true,
        },
        {
          collectionId: 1644264539950,
          id: 7,
          description: 'Finish the essay collaboration',
          isCompleted: false,
        },
        {
          collectionId: 1644264539950,
          id: 8,
          description: 'Finish the essay collaboration',
          isCompleted: false,
        },
      ],
    },
    {
      id: 1644264539951,
      title: 'Work',
      tag: 'work',
      isFavourite: false,
      tasks: [
        {
          collectionId: 1644264539951,
          id: 12,
          description: 'write funciton',
          isCompleted: true,
        },
        {
          collectionId: 1644264539951,
          id: 22,
          description: 'Deploy app',
          isCompleted: false,
        },
        {
          collectionId: 1644264539951,
          id: 33,
          description: 'Read docs',
          isCompleted: false,
        },
        {
          collectionId: 1644264539951,
          id: 44,
          description: 'do comments',
          isCompleted: false,
        },
        {
          collectionId: 1644264539951,
          id: 55,
          description: 'do pull',
          isCompleted: true,
        },
      ],
    },
    {
      id: 1644264539952,
      title: 'Personal',
      tag: 'personal',
      isFavourite: false,
      tasks: [
        {
          collectionId: 1644264539952,
          id: 123,
          description: 'write funciton',
          isCompleted: true,
        },
        {
          collectionId: 1644264539952,
          id: 223,
          description: 'Deploy app',
          isCompleted: true,
        },
        {
          collectionId: 1644264539952,
          id: 333,
          description: 'Read docs',
          isCompleted: true,
        },
      ],
    },
    {
      id: 1644264539953,
      title: 'Empty',
      tag: 'creative',
      isFavourite: false,
      tasks: [],
    },
  ],
};

export const collectionsSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCollection: (state, action) => {
      state.collections.push({
        id: Date.now(),
        title: action.payload.title,
        tag: action.payload.tag,
        isFavourite: false,
        tasks: [],
      });
    },
    deleteCollection: (state, action) => {
      state.collections = state.collections.filter(
        (collection) => collection.id !== action.payload.id
      );
    },
    renameCollection: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === action.payload.id
      );
      state.collections[collectionIndex].title = action.payload.newTitle;
      state.collections[collectionIndex].tag = action.payload.newTag;
    },
    toggleFavourite: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === action.payload.id
      );
      state.collections[collectionIndex].isFavourite =
        !state.collections[collectionIndex].isFavourite;
    },
    addTask: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === action.payload.id
      );
      state.collections[collectionIndex].tasks.push({
        collectionId: state.collections[collectionIndex].id,
        id: Date.now(),
        description: action.payload.description,
        isCompleted: false,
      });
    },
    deleteCompleted: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === action.payload.id
      );
      state.collections[collectionIndex].tasks = state.collections[
        collectionIndex
      ].tasks.filter((task) => task.isCompleted !== true);
    },
    toggleComplete: (state, action) => {
      const collectionIndex = state.collections.findIndex(
        (collection) => collection.id === action.payload.collectionId
      );
      const taskIndex = state.collections[collectionIndex].tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.collections[collectionIndex].tasks[taskIndex].isCompleted =
        !state.collections[collectionIndex].tasks[taskIndex].isCompleted;
    },
  },
});

export const {
  addTask,
  deleteCompleted,
  toggleComplete,
  addCollection,
  deleteCollection,
  renameCollection,
  toggleFavourite,
} = collectionsSlice.actions;

export default collectionsSlice.reducer;
