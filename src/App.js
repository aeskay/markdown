import React from 'react';
// import Badge from "react-bootstrap/Badge";
let marked = require("marked");


class App extends React.Component{
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      markdown: 
      `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code,  between 2 backticks.

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
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

      `
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    })
  }

  render() {
    const editorStyle={
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      width: "100%",
      marginTop: "3%"
    }

    const previerStyle={
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      width: "100%",
      marginTop: "3%",
      backgroundColor: "#eee",
      overflow: "scroll"
    }
    return (
      <div className="App bg-light py-1" style={{height: "100vh"}}>
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1 className="h1 py-2 text-dark" style={{backgroundColor: "#eee"}}>            
                  Markdown Previewer            
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <span className="lead"><span className="badge badge-secondary d-block">Markdown Input</span></span>
              <textarea 
                id="editor" 
                style={editorStyle} 
                onChange={this.handleChange} 
                value = {this.state.markdown}
              >

              </textarea>
            </div>
            <div className="col-md-6">
              <span class="lead"><span class="badge badge-secondary d-block">Markdown Preview</span></span>
              <div id="preview" style={previerStyle} dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
