import { IAuthor, IPost } from '@src/models/models';

export const authors: IAuthor[] = [
    {
        createdAt: '2021-09-01T08:03:46.399Z',
        updatedAt: '2021-09-01T08:03:46.399Z',
        name: 'John Doe',
        avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
        id: '1',
        postId: '1',
    },
    {
        createdAt: '2021-09-01T08:03:46.399Z',
        updatedAt: '2021-09-01T08:03:46.399Z',
        name: 'Lucy Lu',
        avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
        id: '1',
        postId: '1',
    },
    {
        createdAt: '2021-09-01T08:03:46.399Z',
        updatedAt: '2021-09-01T08:03:46.399Z',
        name: 'Jimmy Joe',
        avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
        id: '1',
        postId: '1',
    },
];

export const posts: IPost[] = [
    {
        title: 'title 1',
        description:
            'Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.',
        createdAt: '2021-05-20T01:13:07.861Z',
        updatedAt: '2021-09-17T04:11:19.105Z',
        id: '1',
        authors: [
            {
                createdAt: '2021-02-22T05:09:21.861Z',
                name: 'Lela Abernathy',
                avatar: 'https://cdn.fakercloud.com/avatars/uberschizo_128.jpg',
                updatedAt: '2021-09-17T09:58:16.837Z',
                id: '1',
                postId: '1',
            },
            {
                createdAt: '2020-10-07T21:01:51.705Z',
                name: 'Roland Mayert IV',
                avatar: 'https://cdn.fakercloud.com/avatars/kirangopal_128.jpg',
                updatedAt: '2021-09-17T19:36:01.227Z',
                id: '14',
                postId: '1',
            },
        ],
        comments: [
            {
                createdAt: '2021-04-26T03:23:35.554Z',
                title: 'Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.',
                description:
                    'Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.',
                updatedAt: '2021-09-17T14:44:21.221Z',
                id: '1',
                postId: '1',
            },
            {
                createdAt: '2021-07-01T17:58:03.663Z',
                title: 'Nisi iusto ut est quia eligendi excepturi quos non.',
                description:
                    'Est minus vel repellat accusamus. Nisi ab maiores porro omnis. Est quo at. Culpa assumenda autem natus omnis et qui recusandae sint sed. Ducimus culpa sed dolor aut labore. Quaerat aut alias et.',
                updatedAt: '2021-09-17T14:18:57.572Z',
                id: '13',
                postId: '1',
            },
            {
                createdAt: '2021-01-04T10:52:16.873Z',
                title: 'My Comment',
                description:
                    'Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.',
                updatedAt: '2021-09-17T18:24:08.048Z',
                id: '21',
                postId: '1',
            },
        ],
    },
    {
        title: 'title 4',
        description:
            'Dolor sit quae aut. Velit molestiae dolorem sed et quia labore omnis maiores. Animi molestiae est nihil commodi suscipit accusamus officia dolorum. Assumenda facere veritatis magnam. Iusto sunt et eum excepturi voluptatem sequi qui voluptate. Enim necessitatibus aut ad.',
        createdAt: '2021-08-17T11:34:45.295Z',
        updatedAt: '2021-09-16T20:09:27.164Z',
        id: '4',
        authors: [
            {
                createdAt: '2021-07-05T02:36:03.361Z',
                name: 'Rogelio Leffler',
                avatar: 'https://cdn.fakercloud.com/avatars/dmitriychuta_128.jpg',
                updatedAt: '2021-09-17T00:00:11.185Z',
                id: '4',
                postId: '4',
            },
            {
                createdAt: '2021-01-28T08:00:46.285Z',
                name: 'Greg Hartmann',
                avatar: 'https://cdn.fakercloud.com/avatars/kurtinc_128.jpg',
                updatedAt: '2021-09-17T09:07:37.317Z',
                id: '17',
                postId: '4',
            },
        ],
        comments: [
            {
                createdAt: '2021-03-27T15:39:03.718Z',
                title: 'Explicabo minima iusto autem.',
                description:
                    'Saepe voluptas modi et veritatis recusandae odit. Quia et accusantium nesciunt consequatur aliquid occaecati quibusdam vel. Adipisci sed cupiditate ut dicta expedita enim qui accusantium aut. Et perferendis et sit.',
                updatedAt: '2021-09-17T04:15:40.157Z',
                id: '4',
                postId: '4',
            },
            {
                createdAt: '2021-07-12T20:17:55.080Z',
                title: 'Sequi fuga quisquam et ut amet enim quibusdam hic.',
                description:
                    'Ut velit eos ea veniam aut. Sed delectus consequatur accusamus nostrum. In quam ipsum eius eligendi vel sapiente quia. Qui blanditiis voluptatibus assumenda similique fuga voluptate. Sunt mollitia laudantium quis quas iste.',
                updatedAt: '2021-09-17T08:36:34.587Z',
                id: '16',
                postId: '4',
            },
        ],
    },
];
