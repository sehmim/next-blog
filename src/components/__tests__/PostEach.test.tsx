import { posts } from '@src/utils/testData';
import { render, screen } from '@testing-library/react';
import PostEach, { PostMeta } from '../PostEach';

describe('PostMeta', () => {
    it('should render properContent', () => {
        render(<PostMeta post={posts[0]} />);

        const node = screen.getByText(/Posted Date:/).innerHTML;
        const node2 = screen.getByText(/Last Updated:/).innerHTML;

        const expected = 'Posted Date: Wed May 19 2021by, by Lela Abernathy, Roland Mayert IV';
        const expected2 = 'Last Updated: Fri Sep 17 2021';

        expect(node).toBe(expected);
        expect(node2).toBe(expected2);
    });
});

describe('PostEach', () => {
    it('should render properContent', () => {
        render(<PostEach post={posts[0]} />);

        const nodeTitle = screen.getByText(/title 1/).innerHTML;

        const expected = 'title 1';

        expect(nodeTitle).toBe(expected);
    });
});
