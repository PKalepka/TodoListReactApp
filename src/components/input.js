import React from 'react';
import '../css/components/input.css';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {inputText: ""};
        this.inputTextRef = React.createRef();
        this.inputChanged = this.inputChanged.bind(this);
        this.addButtonClick = this.addButtonClick.bind(this);
    }

    inputChanged(event){
        this.setState({inputText: event.target.value});
    }

    addButtonClick() {
        this.inputTextRef.current.value = "";
        this.props.onAdd(this.state.inputText);
    }

    render() {
        return (
            <div className="flex-input">
                <input type="text" ref={this.inputTextRef} onChange={this.inputChanged}/>
                <button onClick={this.addButtonClick}>Add</button>
            </div>
        );
    }
}