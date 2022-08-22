const dev = process.env.NODE_ENV !== 'production';

export const backendServer = dev ? 'http://127.0.0.1:8000' : 'https://ztickup.herokuapp.com';
export const frontendServer = dev ? 'http://127.0.0.1:3000' : 'https://tickup.netlify.app';