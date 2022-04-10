import { IComment } from '@src/models/models'
import { TitleSub } from '@styles/common'
import React from 'react'
import styled from 'styled-components'
import { formatDate } from './PostEach'


const Wrapper = styled.div``

const CommentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 4px 0px;
  position: relative;
  border-bottom: thin solid #f3f3f3;
    `

const CommentTitle = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
`

const CommentDescription = styled.div`
  padding: 4px 0px;
`


const CommentSubText = styled.div`
  width: auto;
  font-weight: 300;
  margin: 0;
  padding: 0.25em 0;
  color: #7a7a7a;
  font-style: italic;
  font-size: 14px;
`

function Comments({ comments }: { comments: IComment[] }) {

  return (
    <Wrapper>
      <TitleSub>Comments</TitleSub>
      {
        comments.map((comment) => {
          return (
            <CommentContainer>
              <CommentSubText>{formatDate(comment.createdAt as string)}</CommentSubText>
              <CommentTitle>{comment.title}</CommentTitle>
              <CommentDescription>{comment.description}</CommentDescription>
            </CommentContainer>
          )
        })
      }
    </Wrapper>

  )
}

export default Comments