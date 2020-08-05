export type SidePageContentType = {
    title: string,
    text: string,
    textShortcut: string,
    images: { src: string, alt: string, vertical?: boolean }[]
}

export type ArtistContentType =
    & SidePageContentType
    & { alias: string };
