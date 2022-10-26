import React from 'react';
import ArticleItem from './ArticleItem';

export default function ArticleList({ result }) {

    if (result) {
        const listOfArticles = result.docs.map((article) => {
            return <ArticleItem key={article.id} title={article.title_display} />
        })

        return (
            <ul>
                {listOfArticles}

            </ul>
        )
    }
}