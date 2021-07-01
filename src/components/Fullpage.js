import react, {Component} from 'react';
import './Fullpage.css'

class Fullpage extends Component {
    render(){

{/* <Fullpage 
          className="first"
          jj='ll'
        ></Fullpage> */}

        const propsObj = {
            className: 'first',
            jj: 'll',
            
        }
        const obj = {
            key: 'sssss',
            name: 'kkkk',
            family: 'jjjj'
        }

        const {family} =  obj;

        console.log(family)



        const { children } = this.props; 
        return(
            <div className={`Fullpage ${this.props.className || ''}`}>
           {children}
        </div>
        )
        
    }
}

export default Fullpage