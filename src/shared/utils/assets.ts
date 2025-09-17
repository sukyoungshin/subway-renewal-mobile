const CDN = (import.meta.env.VITE_CDN_URL ?? '').replace(/\/+$/, '');

export const asset = (path: string) => `${CDN}${path.startsWith('/') ? path : `/${path}`}`;
