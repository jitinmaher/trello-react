import React, { Component } from 'react';
import Board from '../../board/components/board';
import BoardCard from '../../boardCard/components/boardCard';

class Main extends Component {

    constructor() {
        super();
        this.state={
            boards: {
                mytrello: {
                    name: "NoBroker"
                }
            }
        };
    }

    getBoardCard() {
        const { boards } = this.state;
        return Object.keys(boards).map((key) => {
            const board = boards[key];
            board.key = key;
            return <BoardCard key={key} board={board} />
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <Board />
            </div>
        );
    }
}

export default Main;