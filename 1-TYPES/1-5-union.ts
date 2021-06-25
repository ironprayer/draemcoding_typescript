{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down')

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // function: login -> success, fail
    type SuccessState ={
        response:{
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }

    type LoginStatus = SuccessState | FailState;
    function login() : LoginStatus {
        return {
            response:{
                body: 'logged in',
            }
        }
    };

    // printLoginState(state)
    // success -> body
    // fail -> reason

    /*
    function printLoginState(state:LoginStatus){
        if(typeof(state) == typeSuccessState){}
    }
    */
}