// Read this to understand this file https://mantine.dev/others/rte/#usage-with-nextjs
import dynamic from 'next/dynamic';

export default dynamic(() => import('@mantine/rte'), {
  // Disable during server side rendering
  ssr: false,

  // Render anything as fallback on server, e.g. loader or html content without editor
  loading: () => null,
});