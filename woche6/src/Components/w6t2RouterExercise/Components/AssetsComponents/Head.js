import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({title, content, name}) {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name={name} content={content} />

        </Helmet>

    )
}