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
import { getPosts } from '@src/services/controllers';

const Posts = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const { isLoading, data: posts }: UseQueryResult<IPost[]> = useQuery<IPost[]>('post', () => getPosts(), {
        keepPreviousData: true,
        staleTime: 5000,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const indexOfLastPost = currentPage * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = posts && posts.slice(indexOfFirstPost, indexOfLastPost);

    const disableNext = indexOfLastPost >= ((posts && posts?.length) as number);

    return (
        <div data-testid="posts">
            <Head>
                <title>Blog Post - Sehmim</title>
            </Head>
            <Navbar />

            <Container>
                {currentPosts &&
                    currentPosts.map((post) => {
                        return <PostEach data-testid="postsEach" key={post.id as Key} post={post} />;
                    })}

                {/* Pagination */}
                <Flex padding={20} justifyContent={'center'}>
                    <FlexEnd>
                        <Button
                            data-testid="prevBtn"
                            test-
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Prev Page
                        </Button>
                    </FlexEnd>

                    <FlexEnd>
                        <Button data-testid="nextBtn" onClick={() => setCurrentPage(currentPage + 1)} disabled={disableNext}>
                            Next Page
                        </Button>
                    </FlexEnd>
                </Flex>
            </Container>
        </div>
    );
};

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
