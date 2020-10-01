import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '.';

describe('Layout test cases', () => {
    it('should mount a Layout with title and tags, and rendered on a string', () => {
        const title = 'mock title';
        const moduleName = 'name';
        const scripts = [<script />];
        const styles = [<style />];
        const links = [<link />];

        const html = renderToString(
            <Layout title={title} name={moduleName} styles={styles} links={links} scripts={scripts}>
                <p>some child mocked</p>
            </Layout>,
        );

        expect(html).toMatch(new RegExp(title, 'g'));
        expect(html).toMatch(/<script>/g);
        expect(html).toMatch(/<link\/>/g);
        expect(html).toMatch(/<style>/g);
    });
});
