import React from 'react';
import ArticleItem from './ArticleItem';

export default function ArticleList({ result }) {
    //warten auf die result werte - erst dann wird die liste durch map gelesen...
    //solange die daten nicht vollständig da sind, passiert auch kein map...

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