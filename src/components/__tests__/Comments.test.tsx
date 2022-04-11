import { posts } from '@src/utils/testData';
import { render, screen } from '@testing-library/react';
import Comments from '../Comments';

describe('Comments', () => {
    it('should render properly', () => {
        render(<Comments comments={posts[0].comments} />);
        expect(screen.getByText('Comments')).toBeInTheDocument();
    });
});
