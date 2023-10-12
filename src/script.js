class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Heading Element
## Subheading Element

[This is a link](https://google.com)

_this text is italic_ and __this text is bold__
\`\`\`javascript
this is 
a block 
of code
\`\`\`

> this is a
> Block Quote

- this 
- is 
- a list

this is \`<p>inline code</p>\`
![cute cats](https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750)
`,
      output: ""
    };
    
    this.textInputChange = this.textInputChange.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);
  }

  componentDidMount(){
    this.parseMarkdown(this.state.markdown);
  }
  
  parseMarkdown(text) {
    const parsed = marked.parse(text);
    
    this.setState({
      markdown: text,
      output: parsed
    })
  }
  
  textInputChange(event) {
    this.parseMarkdown(event.target.value);
  }
  
  render() {
    return (
      <div id="App">
        <div className="container" id="container">
          <h1 className="text-center"> Markdown Previewer </h1>
          <div className="row">
            <div className="col-md-6">
              <textarea value={this.state.markdown} onChange={this.textInputChange} className="form-control" id="editor" rows="25"/>
            </div>
            <div className="col-md-6 border">
              <div id="preview" dangerouslySetInnerHTML={{__html: this.state.output}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));