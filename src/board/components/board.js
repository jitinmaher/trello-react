import React, { Component } from 'react';
import ListPanel from '../../listPanel/components/listPanel';

class Board extends Component {

    constructor() {
        super();
        this.state = {
            lists: { 
                TO_DO: { boardKey: "NoBroker", name: "TO_DO"},
                IN_PROGRESS: { boardKey: "NoBroker", name: "IN_PROGRESS" },
                DONE: { boardKey: "NoBroker", name: "DONE" }
            }
        };
    }

    getLists() {
        const { lists } = this.state;
        return Object.keys(lists).map((key) => {    
            const list = lists[key];
            list.key = key;
            return <ListPanel key={key} list={list} />
        });
    }

    render() {
        return (
            <div className="container-fluid">
                {this.getLists()}
            </div>
        );
    }
}

export default Board;