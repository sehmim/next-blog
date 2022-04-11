import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { IAuthor, IComment, IPost } from '@src/models/models';

import styled from 'styled-components';
import { PostMeta, Title } from '@src/components/PostEach';
import { Avatar, Flex, TextBody, TitleSub } from '@styles/common';
import Comments from '@src/components/Comments';
import RelatedPosts from '@src/components/RelatedPosts';
import Head from 'next/head';
import Navbar from '@src/components/Navbar';

// Styles

const Wrapper = styled.div``;

const Measure = styled.div`
    margin: 6rem auto;
    max-width: 80%;
    padding: 2rem 0.25rem;
    border: 1px solid #ccc;
`;

const Section = styled.div`
    margin: 1rem 4rem;
`;

const Hr = styled.hr``;

function PostHeader({ post }: { post: IPost }): JSX.Element {
    return (
        <Wrapper>
            <Section>
                <PostMeta post={post as IPost} />
                <Title>{post?.title}</Title>
            </Section>
            <Hr />
            <Section>
                <TextBody>{post?.description}</TextBody>
            </Section>
        </Wrapper>
    );
}

function PostAuthors({ post }: { post: IPost }): JSX.Element {
    return (
        <Wrapper>
            <Section>
                <Authors authors={post?.authors as IAuthor[]} />
            </Section>
        </Wrapper>
    );
}

function PostComments({ post }: { post: IPost }): JSX.Element {
    return (
        <Wrapper>
            <Section>
                <Comments comments={post?.comments as IComment[]} />
            </Section>
        </Wrapper>
    );
}

function PostRelated({ post }: { post: IPost }): JSX.Element {
    return (
        <Wrapper>
            <Section>
                <RelatedPosts currentPost={post as IPost} />
            </Section>
        </Wrapper>
    );
}

function Post(): JSX.Element {
    const { query } = useRouter();

    const { isLoading, data: post }: UseQueryResult<IPost> = useQuery<IPost>(
        ['post', query.id],
        () => getPostById(query.id as string),
        {
            enabled: !!query.id,
        }
    );

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Head>
                <title>{post?.title} - Sehmim</title>
            </Head>
            <Navbar />
            <Measure>
                <PostHeader post={post as IPost} />
                <PostAuthors post={post as IPost} />
                <Hr />
                <PostComments post={post as IPost} />
            </Measure>

            <Measure>
                <PostRelated post={post as IPost} />
            </Measure>
        </>
    );
}

const Authors = ({ authors }: { authors: IAuthor[] }): JSX.Element => {
    return (
        <div>
            {authors.map((author, i) => {
                return (
                    <Flex flexDirection={'column'} key={i}>
                        <TitleSub>{author.name}</TitleSub>
                        <Avatar src={author.avatar as string} />
                    </Flex>
                );
            })}
        </div>
    );
};

export async function getPostById(id: string): Promise<IPost> {
    const API_URL: RequestInfo = process.env.NEXT_PUBLIC_API_URL as string;

    const res = await fetch(API_URL + `/${id}`);
    const blogs: IPost = await res.json();
    return blogs;
}

export const getServerSideProps: GetServerSideProps = async ({
    params,
}): Promise<{
    props: { dehydratedState: DehydratedState };
}> => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['post', getPostById(params?.id as string)]);

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
};

export default Post;
