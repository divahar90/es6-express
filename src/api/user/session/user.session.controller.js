import SessionService from "./user.session.service";

export default class SessionController{

    constructor(){
        this.sessionServ = new SessionService();
    }

    async login(req, res){
        let users = await this.sessionServ.getUser();        
        res.json(users);
    }
}