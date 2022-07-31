import React from 'react';
import './ye.css'

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state =
         { 
            text:localStorage.getItem("note")
        };
    }
    render(){ 
        localStorage.setItem("note", this.state.text)
        return <>
            <div className="container">
            <div className="input">
                <h3>Input</h3>
                <textarea className="input-text" placeholder="enter text" defaultValue={this.state.text} onChange={(e) => {this.setState({text:e.target.value }) }} />
            </div>
            <div className="output">
                <h3>Pro Note</h3>
                <textarea className="output-text" value={this.state.text} disable={true}></textarea>
            </div>                
        </div>
        </>
        
        }
    
}
