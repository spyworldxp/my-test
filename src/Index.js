import React from 'react';
import { render } from 'react-dom';
import Column from 'Column';


class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allButton:[]
        }

    }

    componentWillMount(){
    }



  render() {
    return (
        <div style={{ display: 'flex',width:'200px'}}>
                <Column color="Red" />
                <Column color="Blue" />
                <Column color="Black" />
            </div>
    )
  }
}

render(<Example />, document.getElementById('root'));
