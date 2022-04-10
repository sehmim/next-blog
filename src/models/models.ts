export interface IPost {
    title: String,
    authors: IAuthor[],
    description: String,
    createdAt: String | Date,
    updatedAt: String | Date,
    id: String,
    comments: IComment[]
}


export interface IAuthor {
    createdAt: String | Date,
    updatedAt: String | Date,
    name: String,
    avatar: URL | String,
    id: String,
    postId: String

}


export interface IComment {
    createdAt: String | Date,
    updatedAt: String | Date,
    title: String,
    description: String,
    id: String,
    postId: String
}
