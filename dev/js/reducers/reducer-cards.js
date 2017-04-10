/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
export default function (state = null, action) {
    console.log("action",action);
    switch (action.type) {
        case 'LIKE':
            return action.payload;
            break;
        case 'DISLIKE':
            return action.payload;
            break;
        case 'BOOKMARK':
            return action.payload;
            break;
        case 'GO_BACK':
            return action.payload;
            break;
    }
    console.log("state in reducer cards",state);
    return [
        {
            id: 1,
            title: "Bucky",
            like: 0,
            dislike: 0,
            bookmark: false,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "./images/img_avatar.png"
        },
        {
            id: 2,
            title: "Joby",
            like: 0,
            dislike: 0,
            bookmark: false,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "./images/img_avatar1.png"
        },
        {
            id: 3,
            title: "Madison",
            like: 0,
            dislike: 0,
            bookmark: false,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "./images/img_avatar2.png"
        }
    ]
}

