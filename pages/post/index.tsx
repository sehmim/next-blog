import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Key, useState } from 'react';
import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

// Components
import Navbar from '@src/components/Navbar';
import PostEach from '@src/components/PostEach';
import { IPost } from '@src/models/models';

// Styles
import { Button, Container, Flex, FlexEnd } from '@styles/common';

const Posts = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const { isLoading, data: posts }: UseQueryResult<IPost[]> = useQuery<IPost[]>('post', () => getPosts(), {
        keepPreviousData: true,
        staleTime: 5000,
    });

    if (isLoading) {
        return (
            <div>
                {/* TODO: Loading Screen */}
                <p>Loading...</p>
            </div>
        );
    }

    const indexOfLastPost = currentPage * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = posts && posts.slice(indexOfFirstPost, indexOfLastPost);

    const disableNext = indexOfLastPost >= ((posts && posts?.length) as number);

    return (
        <div>
            <Head>
                <title>Blog Post - Sehmim</title>
            </Head>
            <Navbar />

            <Container>
                {currentPosts &&
                    currentPosts.map((post) => {
                        return <PostEach key={post.id as Key} post={post} />;
                    })}

                {/* Pagination */}
                <Flex padding={20} justifyContent={'center'}>
                    <FlexEnd>
                        <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                            Prev Page
                        </Button>
                    </FlexEnd>

                    <FlexEnd>
                        <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={disableNext}>
                            Next Page
                        </Button>
                    </FlexEnd>
                </Flex>
            </Container>
        </div>
    );
};

export async function getPosts(): Promise<Array<IPost>> {
    const posts = await fetchPosts();

    const rePosts = posts
        .filter((post: IPost | string) => post !== 'Not found')
        .sort((a: IPost, b: IPost) => {
            return new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime();
        });

    return rePosts;
}

const fetchPosts = async () => {
    // TODO: Move to .env
    const res = await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts`);
    const data = await res.json();
    return data;
};

// To fetch 5 at a time from server
// const fetchPosts = async (pageNumber: string) => {

//     const page = parseInt(pageNumber as string)
//     const pageSize = 5

//     const promises = Array(pageSize).fill(0).map(async (_, i) => {
//         const id = page * pageSize + (i + 1)

//         // TODO: Move to .env
//         const res = await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts/${id}`)
//         const data = await res.json()
//         return data
//     })

//     return Promise.all(promises);
// }

export const getServerSideProps: GetServerSideProps = async ({
    params,
}): Promise<{
    props: { dehydratedState: DehydratedState };
}> => {
    const queryClient = new QueryClient();

    const page = parseInt(params?.page as string);
    await queryClient.prefetchQuery(['post', page], () => getPosts());

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
};

export default Posts;
