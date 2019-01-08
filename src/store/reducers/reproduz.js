const initialState ={
    video:{}
}
export default function reproduz(state=initialState, action){
    if(action.type==='REPRODUZ_VIDEO'){
        return{
            video:action.video
        }
    }else{
        return state
    }
}