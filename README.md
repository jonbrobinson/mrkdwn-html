# Markdown to HTML Converter

This application converts Markdown syntax to HTML. It supports headers, bold, italic, links, and wraps lines in `<p>` tags if they start with a letter and do not already contain HTML tags.

## Features

- Convert Markdown headers (`#`, `##`) to HTML headers (`<h1>`, `<h2>`)
- Convert bold (`**bold**`) and italic (`*italic*`) text to HTML (`<strong>`, `<em>`)
- Convert Markdown links (`[text](url)`) to HTML links (`<a href="url">text</a>`)
- Wrap lines in `<p>` tags if they start with a letter and do not already contain HTML tags

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/markdown-to-html.git
   cd markdown-to-html
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Running Tests

To simulate converting a .md file to html you can run the test and see sample output

1. Run Test to see markdown Conversion

   ```sh
   npm run test
   ```

## Running the Application

Running this application creates a simple api to convert markdown strings to html output.

```sh
npm run dev
```

## Example Request

1. Reqest to see conversion of simple string

```json
{
  "markdown": "# Sample Document\n\nHello!\n\nThis is sample markdown for the [Mailchimp](https://www.mailchimp.com) homework assignment."
}
```

2. Reqest to see conversion of simple string with the option to add line breaks.

```json
{
  "markdown": "# Sample Document\nHello!\nThis is sample markdown for the [Mailchimp](https://www.mailchimp.com) homework assignment.",
  "options": {
    "addLineBreaks": true
  }
}
```
