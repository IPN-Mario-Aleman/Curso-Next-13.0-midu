export type ResponseFromAPI = Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
}>;

export type Comments = Array<{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}>;
