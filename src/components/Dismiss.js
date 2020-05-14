import React from 'react';

const list = [
    {
        "name": "James",
        "age": 20,
        "objectID": 0

    },
    {
        "name": "Zoo",
        "age": 17,
        "objectID": 1

    },
    {
        "name": "Junior",
        "age": 73,
        "objectID": 2

    },
    {
        "name": "Jacob",
        "age": 73,
        "objectID": 3

    },
]

class Dismiss extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: list
        };
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {

        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({list: updatedList});
        console.log(`item with objectId ${id} is Deleted`);
    }

    render() {
        return (
            <div className="details">
                {this.state.list.map(item =>
                    <div key={item.objectID}>
                        <br/>
                        <span>{item.name}</span>
                        <br/>
                        <span>{item.age}</span>
                        <br/>
                        <span>
                        <button
                            onClick={() => this.onDismiss(item.objectID)}
                            type="button"
                        >
                            Dismiss
                        </button>
                        </span>
                    </div>)}
            </div>
        );
    }
}

export default Dismiss;