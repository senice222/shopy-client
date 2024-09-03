
//https://shopy-server-five.vercel.app
export const url = 'https://shopy-server-five.vercel.app'
export const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())