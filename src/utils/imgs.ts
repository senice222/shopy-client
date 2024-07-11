
export const imgs: { [key: string]: string } = {
    "Spotify": `image-1719823162058.png`,
    "Netflix": `image-1719821598147.png`,
}

export const serviceImages = [
    { keywords: ["Spotify"], image: `image-1719823162058.png` },
    { keywords: ["Netflix"], image: `image-1719821598147.png`}
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