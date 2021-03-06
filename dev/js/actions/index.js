
export const selectCard = (cards,id) => {
    console.log("You clicked on card: ", cards.length,id);
    var obj = [];
    cards.map((card) => {
    	if(card.id == id){
	    	obj.push({
	        	id: card.id,
	        	active: !card.active,
	            title: card.title,
	            like: card.like,
	            dislike: card.dislike,
	            bookmark: card.bookmark,
	            description: card.description,
	            thumbnail:card.thumbnail
	        }); 
    	}else{
	    	obj.push(card); 
    	}
    });
    return {
        type: 'CARD_SELECTED',
        payload: obj
    }
};


export const likeCard = (cards,id) => {
    console.log("You clicked on card: ", cards.length,id);
    var obj = [];
    cards.map((card) => {
    	if(card.id == id){
	    	obj.push({
	        	id: card.id,
	        	active: card.active,
	            title: card.title,
	            like: card.like+1,
	            dislike: card.dislike,
	            bookmark: card.bookmark,
	            description: card.description,
	            thumbnail:card.thumbnail
	        }); 
    	}else{
	    	obj.push(card); 
    	}
    });
    return {
        type: 'LIKE',
        payload: obj
    }
};

export const dislikeCard = (cards,id) => {
    console.log("You clicked on card: ", cards.length,id);
    var obj = [];
    cards.map((card) => {
    	if(card.id == id){
	    	obj.push({
	        	id: card.id,
	        	active: card.active,
	            title: card.title,
	            like: card.like,
	            dislike: card.dislike+1,
	            bookmark: card.bookmark,
	            description: card.description,
	            thumbnail:card.thumbnail
	        }); 
    	}else{
	    	obj.push(card); 
    	}
    });
    return {
        type: 'DISLIKE',
        payload: obj
    }
};

export const bookmarkCard = (cards,id) => {
    console.log("You clicked on card: ", cards.length,id);
    var obj = [];
    cards.map((card) => {
    	if(card.id == id){
	    	obj.push({
	        	id: card.id,
	        	active: card.active,
	            title: card.title,
	            like: card.like,
	            dislike: card.dislike,
	            bookmark: !card.bookmark,
	            description: card.description,
	            thumbnail:card.thumbnail
	        }); 
    	}else{
	    	obj.push(card); 
    	}
    });
    return {
        type: 'BOOKMARK',
        payload: obj
    }
};

export const goBack = (cards,selectedCard) => {
    console.log("You clicked on card: ", cards.length,selectedCard.id);
    var obj = [];
    cards.map((card) => {
    	if(card.id == selectedCard.id){
	    	obj.push({
	        	id: selectedCard.id,
	        	active: !selectedCard.active,
	            title: selectedCard.title,
	            like: selectedCard.like,
	            dislike: selectedCard.dislike,
	            bookmark: selectedCard.bookmark,
	            description: selectedCard.description,
	            thumbnail:selectedCard.thumbnail
	        }); 
    	}else{
	    	obj.push(card); 
    	}
    });
    return {
        type: 'GO_BACK',
        payload: obj
    }
};