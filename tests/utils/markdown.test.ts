// sum.test.js
import { expect, test, describe } from 'vitest';
import { mkdownToHtml, toParagraphHtml } from '../../src/utils/markdown.js';

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
    const expected = `<p>Markdown was created by John Gruber with the help of Aaron Swartz to offer a simple way to write web content.</p>\n<p>The idea was to make writing in plain text readable while also being convertible to HTML.</p>`;
    const actual = toParagraphHtml(`${content}`);
    expect(actual).toBe(expected);
  });
});

describe('mkdownToHtml', () => {
  test('string conversion', () => {
    const content = `# Sample Document

Hello!

This is sample markdown for the [Mailchimp](https://www.mailchimp.com) homework assignment.`;

    const expected = `<h1>Sample Document</h1>
<p>Hello!</p>

<p>This is sample markdown for the <a href="https://www.mailchimp.com">Mailchimp</a> homework assignment.</p>`;
    const actual = mkdownToHtml(content);
    expect(actual).toBe(expected);
  });
});
