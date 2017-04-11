import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCard} from '../actions/index'
import {likeCard} from '../actions/index'
import {dislikeCard} from '../actions/index'
import {bookmarkCard} from '../actions/index'
import CardDetail from './card-detail';
require('../../scss/style.scss');

class CardList extends Component {

    renderList() {
        console.log("this.props.cards",this.props);
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
        return this.props.cards.map((card) => {
            return (
                <li 
                    id = "menu"
                    key={card.id}
                >
                {console.log("card",card)}
                <div className="card" style={cardStyle}>
                    <img onClick={() => this.props.selectCard(this.props.cards,card.id)} src={card.thumbnail} alt="Avatar" style={{width:"100%"}}/> 
                    <h4><b>{card.title}</b></h4> 
                    <p>{card.description}</p> 
                    <div id="menu">
                        <button onClick={() => this.props.likeCard(this.props.cards,card.id)}>Like: {card.like}</button>
                        <button onClick={() => this.props.dislikeCard(this.props.cards,card.id)}>    Dislike: {card.dislike}</button>
                        <button onClick={() => this.props.bookmarkCard(this.props.cards,card.id)}>    Bookmark: {''+card.bookmark}</button>
                    </div>
                </div>
                
                </li>
            );
        });
    }

    renderElement() {
        return (
            <div 
                id = "menu"
            >
                // {console.log("card is",this.props.card)}
                <CardDetail />
            
            </div>
        );
    }

    render() {
        var flag = false;
        this.props.cards.map((card) => {
            if(card.active){
                flag = card.active;
            }
        });
        if(flag){
            return (
                <div>
                    {this.renderElement()}
                </div>
            );
        }else{
            return (
                <div>
                    <h2>Card List</h2>
                    <hr />
                    <ul>
                        {this.renderList()}
                    </ul>
                    </div>
            );
        }
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    console.log("this.state",state);
    return {
        cards: state.cards
        // card: state.activeCard
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectCard: selectCard,
        likeCard: likeCard,
        dislikeCard: dislikeCard,
        bookmarkCard: bookmarkCard,
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(CardList);
