import { createElement, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Layout from '../../components/Layout';

class SSR {
  private sheet = new ServerStyleSheet();
  private readonly Component: any;

  constructor(Component: any) {
    this.Component = Component;
  }

  public render(props: any): string {
    const elementOfComponentToRendered = createElement(this.Component);
    const propsRendered = {
      children: elementOfComponentToRendered,
      ...props,
    };

    const LayoutElementWithoutCSS: ReactElement = createElement(Layout, propsRendered);
    renderToString(this.sheet.collectStyles(LayoutElementWithoutCSS));

    const LayoutElementWithCSS: ReactElement = createElement(Layout, {
      ...propsRendered,
      styles: this.sheet.getStyleElement(),
    });

    return renderToString(LayoutElementWithCSS);
  }
}

export default SSR;
