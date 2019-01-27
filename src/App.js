import React, { Component } from "react";
import "./App.css";
import marked from "marked";

marked.setOptions({
	breaks: true
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editor: startText
		};
		this.update = this.update.bind(this);
	}

	componentDidMount() {
		let editor = document.getElementById("editor-textarea");
		editor.value = startText;
	}

	update() {
		let editor = document.getElementById("editor-textarea");
		this.setState({ editor: editor.value });
	}

	render() {
		return (
			<div id="wrapper" className="App">
				<div id="header">
					<h1 id="title">Markdown Previewer</h1>
					<h2 id="desc">
						Enter your notes on the left using markdown syntax, and watch as it
						gets compiled into markdown style on the right.
					</h2>
					<div id="labels">
						<h3 id="editor-title">Editor</h3>
						<h3 id="preview-title">Preview</h3>
					</div>
				</div>
				<div id="editor">
					<textarea id="editor-textarea" onChange={() => this.update()} />
				</div>
				<div id="preview">
					<div
						id="preview-textarea"
						dangerouslySetInnerHTML={{
							__html: marked(this.state.editor)
						}}
					/>
				</div>
			</div>
		);
	}
}

const startText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
