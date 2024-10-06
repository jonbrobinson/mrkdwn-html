const mkdownToHtml = (markdown: string) => {
  markdown.replace(/# (.*?)(\r\n|\r|\n)/g, '<h1>$1</h1>');
  markdown.replace(/## (.*?)(\r\n|\r|\n)/g, '<h2>$1</h2>');
  markdown.replace(/### (.*?)(\r\n|\r|\n)/g, '<h3>$1</h3>');
  markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');

  markdown = toParagraphHtml(markdown);
  return markdown;
};

const toParagraphHtml = (content: string) => {
  const lines = content.split('\n');

  const tagRegex = /^<.*>.*<\/.*>$/;
  const startWordRegex = /^[A-Za-z].*$/;

  const wrappedLines = lines.map((line) => {
    if (!tagRegex.test(line.trim()) && startWordRegex.test(line.trim())) {
      return `<p>${line.trim()}</p>`;
    }

    return line
  });

  return wrappedLines.join('\n');
};

export { mkdownToHtml, toParagraphHtml };
