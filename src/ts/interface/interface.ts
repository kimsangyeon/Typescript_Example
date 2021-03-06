interface IArticle {
    author: string;
    title: string;

    // 선택적 프로퍼티
    url?: string;

    getFulltitle(): string;
}

class Book implements IArticle {
    author: string;
    title: string;
    constructor(author: string, title: string) {
        this.author = author;
        this.title = title;
    }

    getFulltitle(): string {
        return '';
    }
}


