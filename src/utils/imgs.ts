import {url} from "../core/fetch";

export const imgs: { [key: string]: string } = {
    "Spotify": `${url}/api/uploads/image-1719823162058.png`,
    "Netflix": `${url}/api/uploads/image-1719821598147.png`,
}

export const serviceImages = [
    { keywords: ["Spotify"], image: `${url}/api/uploads/image-1719823162058.png` },
    { keywords: ["Netflix"], image: `${url}/api/uploads/image-1719821598147.png`}
];

export const getServiceImage = (serviceName?: string) => {
    for (const { keywords, image } of serviceImages) {
        for (const keyword of keywords) {
            if (serviceName?.includes(keyword)) {
                return image;
            }
        }
    }
};