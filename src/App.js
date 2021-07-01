// import './App.css';
import { Component } from 'react';
import data from './data.json';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import Fullpage from './components/Fullpage'

class App extends Component {
  render() {
    console.log(data);
    return (
      <div className="App">
        <div className="navigation">sarasara</div>
        <Fullpage 
          className="first"
          jj='ll'
        >
          <div>
            <h1 className="title">
              {data.title}
            </h1>
          </div>
          <div>
            <h4>
              {data.subtitle}
            </h4>
          </div>

          <div className="icons-wrapper">
            {/* {
              Object.keys(data.links).map(key => {
                return (
                  <div className="icon">
                    <SocialIcon url={data.links[key]} />
                  </div>
                )
              })
            } */}
          </div>
        </Fullpage>

        <div className="fullpage second">
          <h3>
            {data.sections[0].title}
          </h3>
          <p>
            {data.sections[0].items[0].content}
          </p>
        </div>

        <div className="fullpage" />
      </div>
    );
  }

}

export default App;
