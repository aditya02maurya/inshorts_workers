import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {likeCard} from '../actions/index'
import {dislikeCard} from '../actions/index'
import {bookmarkCard} from '../actions/index'
import {goBack} from '../actions/index'
require('../../scss/style.scss');

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class CardDetail extends Component {
    render() {
        var flag = false;
        var index = 0;
        var CARD = null;
        this.props.cards.map((card) => {
            if(card.active){
                flag = card.active;
                index = card.id-1;
                CARD = card;
            }
        });
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

        if (!CARD) {
            return (
                <div className="card" style={cardStyle}>
                    <h4><b>John Doe</b></h4> 
                </div>
            );
        }
        {console.log("******************card in",CARD)}
        return (
                <div className="card" style={cardStyle} key={CARD.id}>
                    <img src={CARD.thumbnail} alt="Avatar" style={{width:"100%"}}/>
                    <h4><b>{CARD.title}</b></h4> 
                    <p>{CARD.description}</p> 
                    <div id="menu">
                        <button onClick={() => this.props.likeCard(this.props.cards,CARD.id)}>Like: {CARD.like}</button>
                        <button onClick={() => this.props.dislikeCard(this.props.cards,CARD.id)}>    Dislike: {CARD.dislike}</button>
                        <button onClick={() => this.props.bookmarkCard(this.props.cards,CARD.id)}>    Bookmark: {''+CARD.bookmark}</button>
                    </div>
                    <button key={CARD.id} onClick={() => this.props.goBack(this.props.cards,CARD)}>Back</button>
                </div>
            );
        }
}


// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    console.log("state in",state)
    return {
        cards: state.cards
        // card: state.activeCard
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        likeCard: likeCard,
        dislikeCard: dislikeCard,
        bookmarkCard: bookmarkCard,
        goBack: goBack
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CardDetail);
