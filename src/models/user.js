import shortid from "shortid";

class user{
    constructor(name, email, password){
        this.id = shortid();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}



export default user;