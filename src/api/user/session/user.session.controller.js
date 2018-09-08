export default class SessionController{
     login(req, res){
         let user = {
             name: "diva",
             country: "Singapore"
         };
        res.json(user);
    }
}