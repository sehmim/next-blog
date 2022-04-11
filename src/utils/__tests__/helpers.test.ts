import { formatDate, showAuthors } from '../helpers';
import { authors } from '../testData';

describe('formatDate', () => {
    it('should return properly formatted date', () => {
        const date = formatDate('2021-09-01T08:03:46.399Z');

        expect(date).toBe('Wed Sep 01 2021');
    });

    it('should return invalid date when bad dates are given', () => {
        const date = formatDate('banana');

        expect(date).toBe('Invalid Date');
    });
});

describe('showAuthors', () => {
    it('should take array of authors and return their names formatted', () => {
        const resultData = showAuthors(authors);

        expect(resultData).toStrictEqual(', by John Doe, Lucy Lu, Jimmy Joe');
    });
});
