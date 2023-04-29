import HskApi from "../api"


async function searchDoc(text, username, traditional){
    let characters = text.split('').map((char) => {return {"char":char, "group":null}})
    console.log("user",username)
    const cardList = await HskApi.getCardsByUser(username) 
    let included = []

    
    for (let card of cardList){
        const char = (traditional ? card.traditional : card.simplified)
        
        let include = false

        function findAll(string, index = 0){
            const firstIndex = string.indexOf(char)
            console.log(firstIndex)
            if(firstIndex < 0){
                return 
            }

            include = true

            for (let i = 0; i <char.length;i++ ){
                if (characters[index + firstIndex+i].group == 11) continue
                characters[index + firstIndex+i].group = card.group_number
            
            }
                
            findAll(string.slice(firstIndex+1), index + firstIndex+1)
            return
        }

        findAll(text)
        if (include) {included.push(card)}
    }
                
    console.log("included", included)
    return [characters, included]

  }

  export default searchDoc