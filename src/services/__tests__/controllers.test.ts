import { fetchPosts, getPosts } from '../controllers';
import { posts } from '@src/utils/testData';

describe('getPosts', () => {
    // it("should sort by the date", async () => {
    //     jest.mock('fetchPosts', () => () => {
    //         return posts;
    //     })
    //     const result = await getPosts();
    //     expect(result).toStrictEqual([]);
    // });
});

describe('fetchPosts', () => {
    it('shoudl make a successful async request ', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([]),
            })
        ) as jest.Mock;

        const posts = await fetchPosts();
        expect(posts).toStrictEqual([]);
    });

    it('should make a failed async request ', async () => {
        global.fetch = jest.fn(() => Promise.reject({ msg: 'Something went wrong' })) as jest.Mock;

        const posts = await fetchPosts();
        expect(posts).toStrictEqual({ msg: 'Something went wrong' });
    });
});
