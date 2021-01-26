import React from 'react';
import '../css/index.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="flex-header">
                <h2>
                    Todo List
                </h2>
            </div>
        );
    }
}