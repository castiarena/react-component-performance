import React, { ReactElement, Children, cloneElement } from 'react';

export interface HtmlProps {
    title: string;
    name: string;
    lang: string;
}

interface HtmlElementProps extends HtmlProps{
    children: ReactElement;
    styles: ReactElement[];
    links: ReactElement[];
    scripts: ReactElement[];
}

const Html: React.FC<HtmlElementProps> = ({
    children, title, name, styles, scripts, links, lang,
}) => (
    <html lang={lang}>
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>{title}</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;800&display=swap"
                rel="stylesheet"
            />
            {Children.map(links, (link) => cloneElement(link, { key: JSON.stringify(link) }))}
            {Children.map(styles, (style) => cloneElement(style, { key: JSON.stringify(style) }))}
        </head>
        <body>
            <main id={`${name}-wrapper`}>{children}</main>
            {
                Children.map(scripts,
                    (script) => cloneElement(script, { key: JSON.stringify(script) }))
            }
        </body>
    </html>
);

export default Html;
