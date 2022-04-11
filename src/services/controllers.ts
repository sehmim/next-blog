import { IPost } from '@src/models/models';

export async function getPosts(): Promise<Array<IPost>> {
    const posts = await fetchPosts();

    const rePosts = posts.sort((a: IPost, b: IPost) => {
        return new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime();
    });

    return rePosts;
}

export const fetchPosts = async () => {
    const API_URL: RequestInfo = process.env.NEXT_PUBLIC_API_URL as string;

    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
};

// To fetch 5 at a time from server
// const fetchPosts = async (pageNumber: string) => {

//     const page = parseInt(pageNumber as string)
//     const pageSize = 5

//     const promises = Array(pageSize).fill(0).map(async (_, i) => {
//         const id = page * pageSize + (i + 1)

//         const res = await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts/${id}`)
//         const data = await res.json()
//         return data
//     })

//     return Promise.all(promises);
// }
