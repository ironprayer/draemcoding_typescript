{
    // function: login -> success, fail
    type SuccessState ={
        result: 'success';
        response:{
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    }

    type LoginStatus = SuccessState | FailState;
    function login() : LoginStatus {
        return {
            result:'success',
            response:{
                body: 'logged in',
            }
        }
    };

    // printLoginState(state)
    // success -> body
    // fail -> reason

    
    function printLoginState(state:LoginStatus){
        if(state.result === 'success') {
            console.log(`축하 ${state.response.body}`);
        }else{
            console.log(`실패 ${state.reason}`)
        }
    }


}