const dev = process.env.NODE_ENV !== 'production';
// dev ? 'http://127.0.0.1:8000/api' : 
export const backendServer = 'https://ztickup.herokuapp.com/api';
export const frontendServer = dev ? 'http://127.0.0.1:3000' : 'https://tickup.netlify.app';