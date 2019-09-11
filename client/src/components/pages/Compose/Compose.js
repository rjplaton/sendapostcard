import React, { Component } from 'react';
import './Compose.css';
import Postcard from '../../Postcard/Postcard.js';

class Compose extends Component {
  state = {
    title: '',
    text: '',
  }

  onChangeContent = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  }

  onChangeTitle = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }

  submit = () => {
    const formData = {
      title: this.state.title,
      text: this.state.text,
    };

    fetch('/api/mongodb/blogposts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        this.props.history.push('/blog/');
      });
  }

  render() {
      return (
          <div className="Compose">
            <nav className="Compose-navigation">
                <h1 className="Compose-title">Send a postcard</h1>
            </nav>

            <div className="Compose-cardArea">
                <Postcard/>
            </div>

            <div className="Compose-controlArea">
                
            </div>
        </div>
      )
  }


//   render() {
//     return (
//       <div className="WriteArticle">
//         <h1>Write an article</h1>
//         <input
//             name="title"
//             placeholder="Title"
//             value={this.state.title}
//             onChange={this.onChangeTitle}
//           />
//         <br />

//         <textarea
//             name="content"
//             placeholder="Contents"
//             value={this.state.details}
//             onChange={this.onChangeContent}
//           />

//         <br />

//         <button onClick={this.submit}>Add to blog</button>
//       </div>

//     );
//   }
}

export default Compose;
