import youtubeSearch from 'youtube-api-v3-search'
import YTApi from './../../api'

const API_KEY = YTApi

export const INICIAR_BUSCA=()=>{
    return{
        type: 'INICIO_BUSCA',
        carregando: true,
        erro: false,
    }
}

export const BUSCAR_VIDEO_SUCESSO = (videos) => {
    return{
        type: 'BUSCAR_VIDEO_SUCESSO',
        videos,
        carregando:false,
        erro:false
    }
}

export const BUSCAR_VIDEO_FALHA = () => {
    return{
        type: 'BUSCAR_VIDEO_FALHA',
        carregando:false,
        erro:true
    }
}

export const BUSCAR_VIDEO = (termo) => {
    return dispatch=>{
        dispatch(INICIAR_BUSCA())
        youtubeSearch(API_KEY, {q: termo})
        .then((data)=>dispatch(BUSCAR_VIDEO_SUCESSO(data.items)))
        .catch(()=>dispatch(BUSCAR_VIDEO_FALHA()))
    }
}