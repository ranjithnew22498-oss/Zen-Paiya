import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zenpiya.com';
  const routes = [
    '',
    '/about',
    '/services',
    '/semiconductor-expertise',
    '/ai-expertise',
    '/employers',
    '/candidates',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
