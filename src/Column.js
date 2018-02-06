import React from 'react';
import { render } from 'react-dom';
import Button from 'Button';

export default class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allButton:[]
        }

        this.randomNumber = this.randomNumber.bind(this);
    }

    componentWillMount(){
        this.randomNumber();
    }

    randomNumber(){
        let item = Array(Math.floor(Math.random() * 10) + 1).fill().map((_, i) => i+10);
  

        this.setState((state, props) => {
            return {
                allButton: Array.from(item, value => {
                    return <Button num={value} color={this.props.color} />
                })
            };
        });
    }

  render() {
    return (
        <div style={{ flex: 1 }}>
        {this.state.allButton}
        </div>
    )
  }
}
