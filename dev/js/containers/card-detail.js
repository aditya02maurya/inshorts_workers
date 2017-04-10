import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {likeSelectedCard} from '../actions/index'
import {dislikeSelectedCard} from '../actions/index'
import {bookmarkSelectedCard} from '../actions/index'
import {goBack} from '../actions/index'
require('../../scss/style.scss');

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class CardDetail extends Component {
    render() {
        console.log(this.props);
        var cardStyle= {
                 height:400,
                 width:350,
                 padding:0,
                 backgroundColor:"#FFF",
                 WebkitFilter: "drop-shadow(0px 0px 5px #666)",
                 filter: "drop-shadow(0px 0px 5px #666)",
                 display:"inline-block",
                 margin:10

              };

        if (!this.props.card) {
            return (
                <div className="card" style={cardStyle}>
                    <h4><b>John Doe</b></h4> 
                </div>
            );
        }
        {console.log("******************card in",this.props.card)}
        return (
            <div className="card" style={cardStyle} key={this.props.card.id}>
                <img src={this.props.card.thumbnail} alt="Avatar" style={{width:"100%"}}/>
                <h4><b>{this.props.card.title}</b></h4> 
                <p>{this.props.card.description}</p> 
                <div id="menu">
                    <button onClick={() => this.props.likeSelectedCard(this.props.card)}>Like: {this.props.card.like}</button>
                    <button onClick={() => this.props.dislikeSelectedCard(this.props.card)}>    Dislike: {this.props.card.dislike}</button>
                    <button onClick={() => this.props.bookmarkSelectedCard(this.props.card)}>    Bookmark: {''+this.props.card.bookmark}</button>
                </div>
                <button key={this.props.card.id} onClick={() => this.props.goBack(this.props.cards,this.props.card)}>Back</button>
            </div>
        );
    }
}


// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    console.log("state in",state)
    return {
        cards: state.cards,
        card: state.activeCard
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        likeSelectedCard: likeSelectedCard,
        dislikeSelectedCard: dislikeSelectedCard,
        bookmarkSelectedCard: bookmarkSelectedCard,
        goBack: goBack
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CardDetail);
