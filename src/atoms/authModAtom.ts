import {atom} from "recoil";

export interface authModState{
    open:boolean;
    view :"signup" | "login" | "resetPassword";
}

const defaultModalState :authModState={
    open:false,
    view:'login'
}   

export const authModState=atom<authModState>({
    key:"authModState",
    default:defaultModalState,  

})