import { IPost } from '@src/models/models';
import { formatDate, showAuthors } from '@src/utils/helpers';
import { Flex, FlexEnd } from '@styles/common';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const PostEachContainer = styled.div`
    margin: 2rem 4rem;
    border-bottom: thin solid #f3f3f3;
    padding: 3rem 2rem;

    :hover {
        box-shadow: 0 8px 12px 0 rgb(0 0 0 / 10%);
    }
`;

const PostMetaWrapper = styled.div`
    width: auto;
    font-weight: 300;
    margin: 0;
    padding: 0.25em 0;
    color: #7a7a7a;
    font-style: italic;
    font-size: 14px;
`;

const PostLink = styled.a``;

export const Title = styled.div`
    margin-top: 0;
    font-weight: 600;
    color: #333;
    word-break: break-word;
    font-size: 24px;

    :hover {
        cursor: pointer;
        color: #0076df;
    }
`;

const Container = styled.div``;

const TextBody = styled.div``;

interface IPostEachProps {
    post: IPost;
}

export const PostMeta = ({ post }: { post: IPost }): JSX.Element => {
    return (
        <PostMetaWrapper>
            <Flex justifyContent="space-between">
                <FlexEnd>
                    Posted Date: {formatDate(post.createdAt as string)}
                    by
                    {showAuthors(post.authors)}
                </FlexEnd>
                <FlexEnd>Last Updated: {formatDate(post.updatedAt as string)}</FlexEnd>
            </Flex>
        </PostMetaWrapper>
    );
};

function PostEach({ post }: IPostEachProps): JSX.Element {
    return (
        <PostEachContainer>
            <PostMeta post={post} />

            <PostLink>
                <Link href={'/post/' + post.id}>
                    <Title>{post.title}</Title>
                </Link>
            </PostLink>

            <Container>
                <TextBody>{post.description}</TextBody>
            </Container>
        </PostEachContainer>
    );
}

export default PostEach;
