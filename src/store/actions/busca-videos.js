import youtubeSearch from 'youtube-api-v3-search'
import YTApi from './../../api'

const API_KEY = YTApi

export const INICIO_BUSCA=()=>{
    return{
        type: 'INICIO_BUSCA',
    }
}

export const BUSCAR_VIDEO_SUCESSO = (videos) => {
    return{
        type: 'BUSCAR_VIDEO_SUCESSO',
        videos,
    }
}

export const BUSCAR_VIDEO_FALHA = () => {
    return{
        type: 'BUSCAR_VIDEO_FALHA',
    }
}

export const BUSCAR_VIDEO = (termo) => {
    return dispatch=>{
        dispatch(INICIO_BUSCA())
        youtubeSearch(API_KEY, {q: termo})
        .then((data)=>dispatch(BUSCAR_VIDEO_SUCESSO(data.items)))
        .catch(()=>dispatch(BUSCAR_VIDEO_FALHA()))
    }
}