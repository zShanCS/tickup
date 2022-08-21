const dev = process.env.NODE_ENV !== 'production';

export const backendServer = dev ? process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL : 'https://ztickup.herokuapp.com';