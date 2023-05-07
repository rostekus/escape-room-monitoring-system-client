const hints = [
    {
        "gameId": 0,
        "text": "Open the door 1",
        "num" :1,
    },
    {
    
        "gameId": 0,
        "text": "Open the door 2",
        "num" :2,

    },
    {
        "gameId": 1,
        "text": "Open the door 1",
        "num" :1,
    },
    {
    
        "gameId": 1,
        "text": "Open the door 2",
        "num" :2,

    },
    {
        "gameId": 2,
        "text": "Open the door 1",
        "num" :1,
    },
    {
    
        "gameId": 2,
        "text": "Open the door 2",
        "num" :2,

    },
]


let getGamesForUserID = (userId) => {
    return games;
}
const games = [
    {   "id": 0,
        "name": "Escape Room Game",
        "startTimestamp": 1649347200000,
        "endTimestamp": 1649350800000
    },
    {   
        "id": 1,
        "name": "Escape Room Game 1",
        "startTimestamp": 1649347200000,
        "endTimestamp": 1649350800000
    },
    {   
        "id": 2,
        "name": "Escape Room Game 2",
        "startTimestamp": 1649347200000,
        "endTimestamp": 1649350800000
    },
    {   
        "id": 3,
        "name": "Escape Room Game 3",
        "startTimestamp": 1649347200000,
        "endTimestamp": 1649350800000
    },
    {   
        "id": 4,
        "name": "Escape Room Game 4",
        "startTimestamp": 1649347200000,
        "endTimestamp": 1649350800000
    },
]



let getHintsForGameID = (gameId) => {

    
    return hints.filter(hint => hint.gameId === gameId);
}

let addHint = (gameId, text, num) => {
    hints.push({
        "gameId": gameId,
        "text": text,
        "num" :num,
    })
}




export { getGamesForUserID, getHintsForGameID, addHint}