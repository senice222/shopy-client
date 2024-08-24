
//https://shopy-server-five.vercel.app
export const url = 'http://localhost:4000'

export const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())