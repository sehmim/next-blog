import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
    it('should render', () => {
        render(<Navbar />);
        expect(screen.getByText('LOGO')).toBeInTheDocument();
    });
});
