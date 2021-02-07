import React from 'react';
import '../css/components/Input.css';

export default class Input extends React.Component {
    state = {inputText: ""};

    inputChanged = (event) => {
        this.setState({inputText: event.target.value});
    }

    addButtonClick = () => {        
        if (this.state.inputText === "") {
            return;
        }

        this.setState({inputText: ""});
        this.props.onAdd(this.state.inputText);
    }

    render() {
        return (
            <div className="flex-input">
                <input type="text" value={this.state.inputText} onChange={this.inputChanged}/>
                <button onClick={this.addButtonClick}>Add</button>
            </div>
        );
    }
}
