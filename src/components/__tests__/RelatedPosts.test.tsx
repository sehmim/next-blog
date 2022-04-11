import { posts } from '@src/utils/testData';
import { act, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import RelatedPosts from '../RelatedPosts';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([]),
    })
) as jest.Mock;

describe('RelatedPosts', () => {
    const queryClient = new QueryClient();

    it('should show loading when fetching', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <RelatedPosts currentPost={posts[0]} />
            </QueryClientProvider>
        );

        const elem = screen.getByTestId('loading');
        expect(elem).toBeInTheDocument();
    });

    it('should show suggestions after fetch', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <RelatedPosts currentPost={posts[0]} />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('If you enjoyed this post, you might also like:')).toBeInTheDocument();
        });

        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    });
});
