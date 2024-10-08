const mkdownToHtml = (
  markdown: string,
  options: { addLineBreaks?: boolean } = {}
) => {
  markdown = markdown.replace(/### (.*?)(\r\n|\r|\n|$)/g, '<h3>$1</h3>$2');
  markdown = markdown.replace(/## (.*?)(\r\n|\r|\n|$)/g, '<h2>$1</h2>$2');
  markdown = markdown.replace(/# (.*?)(\r\n|\r|\n|$)/g, '<h1>$1</h1>$2');
  markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  markdown = toParagraphHtml(markdown, options);
  return markdown.trim();
};

const toParagraphHtml = (
  content: string,
  opitions: { addLineBreaks?: boolean } = {}
) => {
  const contenlines = content.split('\n');
  const lines = [];

  for (let i = 0; i < contenlines.length; i++) {
    let current = contenlines[i];
    if (!!lines[lines.length - 1] && !!contenlines[i]) {
      current = lines.pop() || '';
      const lineBreakTag = opitions.addLineBreaks ? '<br>' : ' ';
      current += lineBreakTag + contenlines[i];
    }

    lines.push(current);
  }

  const tagRegex = /^<.*>.*<\/.*>$/;
  const startWordRegex = /^[A-Za-z].*$/;

  const wrappedLines = lines.map((line) => {
    if (!tagRegex.test(line.trim()) && startWordRegex.test(line.trim())) {
      return `<p>${line.trim()}</p>`;
    }

    return line;
  });

  return wrappedLines.join('\n');
};

export { mkdownToHtml, toParagraphHtml };
