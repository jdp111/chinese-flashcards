import axios from "axios";

const BASE_API_URL = "http://localhost:3001";


class HskApi {


    // the token for interactive with the API will be stored here.\
  
  static async request(endpoint, data = {}, method = "get") {

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const token = localStorage.getItem('token') || ""
    console.log(token)
    const url = `${BASE_API_URL}/${endpoint}`;
    const headers = { authorization: `Bearer ${token}` };
    const params = data

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async login(userInfo){
    let res = await this.request(`auth/token`,userInfo, "post");
    return res
  }

  static async register(userInfo){
    let res = await this.request(`auth/register`,userInfo, "post");
    return res
  }

  static async getCardsByUser(username){
    let res = await this.request(`cards/${username}`)
    return res
  }

  static async getCardsByUserGroup(username,groupId){
    let res = await this.request(`cards/${username}/${groupId}`)
    return res
  }


  static async updateGroup(username, cardId, groupNumber){
    let endpoint = `cards/${username}`
    let data = {"cardId": cardId, "groupNumber": groupNumber}
    let res = await this.request(endpoint, data,"put")
    return res
  }

  static async addCards(username, cards){
    let endpoint = `cards/add/${username}`
    let data = {"cards": [...cards]}
    let res = await this.request(endpoint, data,"post")
    return res
  }

  static async deleteCards(username, cards){
    let endpoint = `cards/delete/${username}`
    let data = {"cards":cards}
    let res = await this.request(endpoint, data,"delete")
    return res
  }

  static async IncreaseSession(username){
    let endpoint = `users/${username}`
    let res = await this.request(endpoint,{},"put")
    return res
  }

  static async getWords(searchBy = "simplified", searchTerm = ""){
    let endpoint = `words?${searchBy}=${searchTerm}`
    let res = await this.request(endpoint)
    return res
  }

}

export default HskApi;
