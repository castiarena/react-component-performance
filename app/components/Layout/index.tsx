import React, { ReactElement } from 'react';

interface LayoutProps {
    title: string;
    name: string;
    children: ReactElement;
    styles: ReactElement[];
    links: ReactElement[];
    scripts: ReactElement[];
}

const Layout: React.FC<LayoutProps> = ({ children, title, name, styles, scripts, links }) => (
    <html lang="en">
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
            {links}
            {styles}
        </head>
        <body>
            <main id={`${name}-wrapper`}>{children}</main>
            {scripts}
        </body>
    </html>
);

export default Layout;
