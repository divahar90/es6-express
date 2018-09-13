import SessionDb from "./user.session.db";

export default class SessionService{

    constructor(){
        this.sessionDb = new SessionDb();
    }
   
    async getUser(){
        let user = await this.sessionDb.getUser();
        return user;
    }
}