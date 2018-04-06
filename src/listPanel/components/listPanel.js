import React, { Component } from 'react';
import ListCard from '../../listCard/components/listCard';

class ListPanel extends Component {

    constructor() {
        super();
        this.state = {
            cards: {
                card1: {
                    listKey: "TO_DO",
                    text: "TESTING THIS"
                },
                card2: {
                    listKey: "TO_DO",
                    text: "TESTING THIS 2"
                },
                card3: {
                    listKey: "IN_PROGRESS",
                    text: "TESTING THIS 3"
                },
                card4: {
                    listKey: "IN_PROGRESS",
                    text: "TESTING THIS 4"
                },
                card5: {
                    listKey: "DONE",
                    text: "TESTING THIS 5"
                },
                card6: {
                    listKey: "DONE",
                    text: "TESTING THIS 6"
                }
            }
        };
    }

    handleOnDragOver(event) {
        event.preventDefault();
    }
    
    handleOnDragLeave(event) {
        event.preventDefault();
    }
    
    handleOnDrop(event) {
        event.preventDefault();
        var card = JSON.parse(event.dataTransfer.getData('card'));
        card.listKey = this.props.list.key;
        delete card.key;
    }

    getListCard() {
        const { cards } = this.state;
        return Object.keys(cards).map((key) => {
            const card = cards[key];
            card.key = key;
            return <ListCard key={key} card={card} />;
        });
    }

    render() {
        return (
            <div className="col-md-2" onDragOver={this.handleOnDragOver.bind(this)} onDragLeave={this.handleOnDragLeave.bind(this)} onDrop={this.handleOnDrop.bind(this)}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.list.name}
                    </div>            
                    <div className="panel-body">
                        {this.getListCard()}
                    </div>                         
                </div>
            </div>
        )
    }
}

export default ListPanel;