import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';
import Html, { HtmlProps } from '../../components/Html';

const statsFile = path.resolve('./dist/public/loadable-stats.json');

class SSR {
    private sheet: ServerStyleSheet;

    private extractor: ChunkExtractor;

    private readonly Component: React.FC;

    private readonly htmlProps: HtmlProps;

    constructor(Component: React.FC, props: HtmlProps) {
        this.Component = Component;
        this.htmlProps = props;
        this.extractor = new ChunkExtractor({ statsFile, entrypoints: [props.name] });
        this.sheet = new ServerStyleSheet();
    }

    public render(context: StaticRouterContext, location: string = '/'): string {
        const { name, title, lang } = this.htmlProps;
        const { Component } = this;

        const children = this.extractor.collectChunks(this.sheet.collectStyles(
            <StaticRouter location={location} context={context}>
                <Component />
            </StaticRouter>,
        ));

        const styles: ReactElement[] = renderToString(children) && this.sheet.getStyleElement();
        const scripts: ReactElement[] = this.extractor.getScriptElements();
        const links: ReactElement[] = this.extractor.getLinkElements();

        this.sheet.seal();

        return renderToString(
            <Html
                title={title}
                name={name}
                lang={lang}
                styles={styles}
                scripts={scripts}
                links={links}
            >
                {children}
            </Html>,
        );
    }
}

export default SSR;
