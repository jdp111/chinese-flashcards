import HskApi from "../api"


async function searchDoc(evt, text, username, traditional){
    const characters = text.split('').map()
    const cardList = await HskApi.getCardsByUser(username) 

    for (let card of cardList){
        const char = (traditional ? card.traditional : card.simplified)
        
        if(text.includes(char)){
            for (let i=0; i < char.length; i++){

            }
        }
        
    }

  }

  export default searchDoc