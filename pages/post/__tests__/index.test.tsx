import { posts } from '@src/utils/testData';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from '..';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        })
    ) as jest.Mock;
});
describe('Posts', () => {
    const queryClient = new QueryClient();

    it('should render properly', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Posts />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('prevBtn')).toHaveAttribute('disabled');
            expect(screen.getByTestId('posts')).toBeInTheDocument();
        });
    });

    it('should change the state when button is clicked', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Posts />
            </QueryClientProvider>
        );
    });
});
