import React, { Component } from 'react';

class ListCard extends Component {

    constructor(){
        super();
        this.style = {
            position: "absolute",
            right: 5,        
            top: 0
        }
    }

    handleOnClick() {
        this.cardsRef.child(this.props.card.key).remove();
    }

    handleOnDragStart(event) {
        event.dataTransfer.setData('card', JSON.stringify(this.props.card));
    } 

    render() {
        return <div className="card" draggable="true" onDragStart={this.handleOnDragStart.bind(this)}>
            <p>{this.props.card.text}</p>
            {/*
            <div style={this.style}>
                <button className="close" onClick={this.handleOnClick}>x</button>
            </div>
            */}
        </div>;
    }
}

export default ListCard;