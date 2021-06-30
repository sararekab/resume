// import './App.css';
import { Component} from 'react';
import data from './data.json';
// import { SocialIcon } from 'react-social-icons';

class  App extends Component {
  render() {
    console.log(data);
    return (
      <div className="App">
      <div className="navigation"/>
      <div className="fullpage">
        <h1 className="title">
        {data.title} 
        </h1>
      </div>
      <div>
          <h2>
            {data.subtitle}
          </h2>
      </div>

      <div>
      {
        // <SocialIcon url="https://twitter.com/jaketrent" />
        // ........................................
        // Object.keys(data.links).map(key => {
        //   return(
        //     <SocialIcon url= {data.links[key]} />
        //   )
        // })
      }
      </div>
      <div className="fullpage">
        <h3>
          {data.sections[0].title}
        </h3>
        <p>
        {data.sections[0].items[0].content}
        </p>
      </div>
      
           <div className="fullpage"/>
      </div>
    );
  }

}

export default App;
