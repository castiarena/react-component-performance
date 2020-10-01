import { createElement, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';
import Layout from '../../components/Layout';

const statsFile = path.resolve('./dist/public/loadable-stats.json');

class SSR {
  private sheet = new ServerStyleSheet();

  private extractor = new ChunkExtractor({ statsFile, entrypoints: ['app'] });

  private readonly Component: any;

  constructor(Component: any) {
    this.Component = Component;
  }

  public render(props: any): string {
    const elementOfComponentToRendered: ReactElement = createElement(this.Component, props);

    this.sheet.collectStyles(elementOfComponentToRendered);
    this.extractor.collectChunks(elementOfComponentToRendered);

    const styles: ReactElement[] = this.sheet.getStyleElement();
    const scripts: ReactElement[] = this.extractor.getScriptElements();
    const links: ReactElement[] = this.extractor.getLinkElements();

    return renderToString(
      createElement(Layout, {
        ...props,
        styles,
        scripts,
        links,
      }),
    );
  }
}

export default SSR;
