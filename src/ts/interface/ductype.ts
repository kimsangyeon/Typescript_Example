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

    getFulltitle(): string {
        return this.title;
    }
}

function news (article: IArticle) {
    let title = article.getFulltitle();
}

let mbc = new Article();
news(mbc);

mbc.getFulltitle();



