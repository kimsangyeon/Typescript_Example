interface IArticle {
    author: string;
    title: string;

    // 선택적 프로퍼티
    url?: string;

    getFulltitle(): string;
}

class Article {
    author: string;
    title: string;

    constructor(author: string, title: string) {
        this.author = author;
        this.title = title;
    }

    getFulltitle(): string {
        return this.title;
    }
}

function news (article: IArticle) {
    let title = article.getFulltitle();
}

let mbc = new Article("yeon", "typescript");
news(mbc);

mbc.getFulltitle();



