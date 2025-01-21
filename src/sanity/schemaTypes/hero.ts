import { Rule } from '@sanity/types';
export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().min(3).max(50),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule:Rule) => Rule.required(),
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().max(100),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule:Rule) => Rule.required().max(300),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: (Rule:Rule) => Rule.required(),
      },
    ],
  };
  