/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path are handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * Learn more about next-sanity here:
 * https://github.com/sanity-io/next-sanity
 */

import dynamic from 'next/dynamic';
import config from '../../../../sanity.config';

// Dynamically import NextStudio
const NextStudio = dynamic(() =>
  import('next-sanity/studio').then((mod) => mod.NextStudio as React.ComponentType<{ config: typeof config }>),
  { ssr: false }
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}

