import { marked } from 'marked';

marked.setOptions({
  breaks: true
});

const preload =
  "# Markdown Previewer\n" +
  "## This is a text editor that renders whatever you write!\n" +
  "[GitHub's repository](https://www.github.com/IkPc/Markdown-Previewer)\n\n" +
  "Here is some inline code: `console.log('Hello, world!');`\n\n" +
  "```\n" +
  "function testing(test) {\n" +
  "  return `This is a ${test}`;\n" +
  "}\n" +
  "```\n\n" +
  "- Item 1\n" +
  "- Item 2\n\n" +
  "> This is a blockquote\n\n" +
  "![Dog Image](https://i.pinimg.com/474x/fd/83/fb/fd83fb3fe93cf6aa397ffc14d4f49498.jpg)\n" +
  "**This is a puppy!**";
  
const html = marked(preload);
console.log(html);
  
export default preload;
