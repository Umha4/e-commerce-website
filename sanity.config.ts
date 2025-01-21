'use client';

/**
 * This configuration is for the Sanity Studio mounted at the `\src\app\studio\[[...tool]]\page.tsx` route.
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // Desk tool is commonly used for basic CMS needs.
import { apiVersion, dataset, projectId } from './src/sanity/env';
import Hero from '@/sanity/schemaTypes/ShopHero';
import { product } from '@/sanity/schemaTypes/product';

// Define your schema types
const schemaTypes = [Hero, product];

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',

  basePath: '/studio', // Base path for your Sanity Studio
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,

  schema: {
    types: schemaTypes, // Schema types
  },

  plugins: [
    deskTool(), // Default desk tool for managing documents
    visionTool({
      defaultApiVersion: apiVersion, // Vision tool for GROQ queries
    }),
  ],
});

