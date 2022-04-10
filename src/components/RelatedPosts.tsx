import { getPosts } from '@pages/post'
import { IPost } from '@src/models/models'
import { Flex, TextBody } from '@styles/common'
import Link from 'next/link'
import React from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import styled from 'styled-components'
import { Title } from './PostEach'


const RelatedPostsContainer = styled.div`
    width: 100%;
    margin: 2rem 2rem;
`

const RelatedPostsEach = styled.div`
    background: #fff;
    box-shadow: 0 8px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 2rem;

`

function RelatedPosts({ currentPost }: { currentPost: IPost }) {

    const { isLoading, data: posts }: UseQueryResult<IPost[]> = useQuery<IPost[]>('post', () => getPosts(), { keepPreviousData: true, staleTime: 5000 })

    if (isLoading) {
        return (<div>loading...</div>)
    }

    const suggestedPosts = posts && posts.filter(post => post.id != currentPost.id).slice(0, 3)

    return (
        <div>
            <Title>If you enjoyed this post, you might also like:</Title>
            <hr></hr>
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
                {
                    suggestedPosts?.map(post => {
                        return (<RelatedPostsContainer>
                            <RelatedPostsEach>
                                <Link href={"/post/" + post.id}>
                                    <Title>{post.title}</Title>
                                </Link>
                                <hr></hr>
                                <TextBody>{post.description}</TextBody>
                            </RelatedPostsEach>
                        </RelatedPostsContainer>)
                    })
                }
            </Flex>
        </div>
    )
}

export default RelatedPosts