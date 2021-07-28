{
class TimeoutError extends Error{}

class OfflineError extends Error{}

class NetwrokClinet {
    tryConnect(): void{
        throw new Error('no network!');
    }
}

class UserService {
    constructor(private client: NetwrokClinet){}

    login(){
        this.client.tryConnect();
    }
}

class App{
    constructor(private userService: UserService){}
    run() {
        try{
            this.userService.login();
        } catch (error){
            // show dialog to suer
            if(error instanceof OfflineError){}
            
        }
    }
}

const client = new NetwrokClinet();
const service = new UserService(client);
const app = new App(service);
app.run();
}