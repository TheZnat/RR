import { DECREMENT, INCREMENT } from "./type";


export function incrementLikes(){
    return{
        type: INCREMENT
    }
}

export function decrementLikes(){
    return{
        type: DECREMENT
    }
}