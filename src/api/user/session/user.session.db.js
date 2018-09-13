import SessionService from "./user.session.db";

export default class SessionDb{

     getUser(){

        // fetch from db. process results in .then and return

        let user = {
            name: "diva",
            country: "Singapore"
        };

        return user;
    }
}