import { IAuthor } from '@src/models/models';

export const formatDate = (date: string): string => {
    const dateJS = new Date(date as string).toDateString();

    return dateJS;
};

export const showAuthors = (authors: IAuthor[]): string => {
    let authorsText = ', by ';

    authors.map((author, i) => {
        authorsText += author.name;

        if (i !== authors.length - 1) {
            authorsText += ', ';
        }
    });

    return authorsText;
};
