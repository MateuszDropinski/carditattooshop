export type SidePageContentType = {
    title: string,
    text: string,
    textShortcut: string,
    images: { src: string, alt: string, vertical?: boolean }[]
}

export type ArtistContentType =
    & SidePageContentType
    & { alias: string };

export enum PostContentType {
    Text = 'Text',
    Image = 'Image'
}

export type PostContent = {
    type: PostContentType,
    payload: any
}

export type PostType = {
    title: string,
    textShortcut: string,
    author: ArtistContentType,
    date: string,
    image: {
        src: string,
        alt: string
    },
    content: PostContent[]
}

