import React, { Component } from 'react';
import Log from './Log';

export class MyEntry extends Component {
    constructor(props) {
        super(props);
    
        this.state = (
            {entries: []}
        )
        this.deleteEntryHandler=this.deleteEntryHandler.bind(this);
        this.addEntryHandler = this.addEntryHandler.bind(this);
        this.inputRef = React.createRef();
    }
    deleteEntryHandler(entryIndex){
        const entries = [...this.state.entries];
        entries.splice(entryIndex,1);
        this.setState({entries : entries})
    }
    addEntryHandler=(event)=>{
        this.inputRef.current.focus();
        event.preventDefault();        
        const ent = [...this.state.entries];
        const newEntry =[];
        newEntry.content = this.inputRef.current.value;
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        newEntry.time =(hour + ':' + minutes);
        newEntry.todaysDate = (day + "-" + month + "-" + year)
        ent.push(newEntry);
        this.setState({entries: ent})
        this.inputRef.current.value = null;
        
    }
    render() {
        const submitstyle={
            borderRadius: '2px',
            backgroundColor: 'lightseagreen',
            color:'white',
            width: '25%',
            padding: '20px',
            height:'2%',
            margin: '20px',
        }
        const inputstyle = {
            width:'75%',
            height:'40px',
            padding:'2px',
            
        }
        let entriess = (
            <div>
                 {this.state.entries.map(e => <Log entryy ={e.content} timee={e.time} clickk={(i) => this.deleteEntryHandler(i)} datee ={e.todaysDate}/>)}
            </div>
        )
        return (
            <div>
                <form onSubmit ={(event)=>this.addEntryHandler(event)}>
                    <input type="text" placeholder="Type new Entry here..." ref={this.inputRef} style={inputstyle} /><br />
                    <input type="submit" value="Post" style={submitstyle} />
                </form>
                <ul>
                    {entriess}
                </ul>
            </div>
        )
    }
}

export default MyEntry;
