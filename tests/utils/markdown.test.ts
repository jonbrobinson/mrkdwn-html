// sum.test.js
import { expect, test, describe } from 'vitest';
import * as fs from 'fs';
import { mkdownToHtml, toParagraphHtml } from '../../src/utils/markdown.js';
import path from 'path';

describe('toParagraphHtml', () => {
  test('string conversion', () => {
    const content =
      'Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content. The idea was to make writing in plain text readable while also being convertible to HTML.';
    const expected = `<p>${content}</p>`;
    const actual = toParagraphHtml(content);
    expect(actual).toBe(expected);
  });

  test('string with new line conversion', () => {
    const content =
      'Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content. The idea was to make writing in plain text readable while also being convertible to HTML.';
    const expected = `<p>${content}</p>\n`;
    const actual = toParagraphHtml(`${content}\n`);
    expect(actual).toBe(expected);
  });

  test('string with multi line conversion', () => {
    const content = `Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content.
The idea was to make writing in plain text readable while also being convertible to HTML.`;
    const expected = `<p>Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content. The idea was to make writing in plain text readable while also being convertible to HTML.</p>`;
    const actual = toParagraphHtml(`${content}`);
    expect(actual).toBe(expected);
  });

  test('string with multi line conversion and line breaks', () => {
    const content = `Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content.
The idea was to make writing in plain text readable while also being convertible to HTML.`;
    const expected = `<p>Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content.<br>The idea was to make writing in plain text readable while also being convertible to HTML.</p>`;
    const actual = toParagraphHtml(`${content}`, { addLineBreaks: true });
    expect(actual).toBe(expected);
  });
});

describe('mkdownToHtml', () => {
  test('Sample1 Data Text', () => {
    const sample1 = fs.readFileSync(
      path.resolve(__dirname, '../mock/files/sample1.txt'),
      'utf8'
    );

    const expected = `<h1>Sample Document</h1>

<p>Hello!</p>

<p>This is sample markdown for the <a href="https://www.mailchimp.com">Mailchimp</a> homework assignment.</p>`;

    const sample1HtmlActual = mkdownToHtml(sample1);
    fs.writeFile(
      path.resolve(__dirname, '../mock/files/sample1Output.txt'),
      sample1HtmlActual,
      (err) => {}
    );
    expect(sample1HtmlActual).toBe(expected);
  });

  test('Sample2 Data Text without Line Breaks', () => {
    const sample2 = fs.readFileSync(
      path.resolve(__dirname, '../mock/files/sample2.txt'),
      'utf8'
    );

    const sample2HtmlActual = mkdownToHtml(sample2);
    const expected = `<h1>Header one</h1>

<p>Hello there</p>

<p>How are you? What's going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;
    fs.writeFile(
      path.resolve(__dirname, '../mock/files/sample2WithoutOutput.txt'),
      sample2HtmlActual,
      (err) => {}
    );
    expect(sample2HtmlActual).toBe(expected);
  });

  test('Sample2 Data Text with Line Breaks', () => {
    const sample2 = fs.readFileSync(
      path.resolve(__dirname, '../mock/files/sample2.txt'),
      'utf8'
    );

    const sample2HtmlActual = mkdownToHtml(sample2, { addLineBreaks: true });
    const expected = `<h1>Header one</h1>

<p>Hello there</p>

<p>How are you?<br>What's going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;
    fs.writeFile(
      path.resolve(__dirname, '../mock/files/sample2WithLineBreaksOutput.txt'),
      sample2HtmlActual,
      (err) => {}
    );
    expect(sample2HtmlActual).toBe(expected);
  });
});
