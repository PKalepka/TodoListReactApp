import React from 'react';
import '../css/index.css';

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
            <div>
                <input type="text" ref={this.inputTextRef} onChange={this.inputChanged}/>
                <button onClick={this.addButtonClick}>Add</button>
            </div>
        );
    }
}