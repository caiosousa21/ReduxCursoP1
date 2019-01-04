import { BUSCAR_VIDEO, BUSCAR_VIDEO_SUCESSO, BUSCAR_VIDEO_FALHA } from "../actions/busca-videos";

const initialState = {
    videos: [],
    carregando: false,
    erro: false,
}

export default function busca(state = initialState, action) {
    switch (action.type) {
        case BUSCAR_VIDEO:
            return {
                videos: [],
                carregando: true,
                erro: false,
            }
        case BUSCAR_VIDEO_SUCESSO:
            return {
                videos: action.videos,
                carregando: false,
                erro: false,
            }
        case BUSCAR_VIDEO_FALHA:
            return {
                videos: [],
                carregando: false,
                erro: true,
            }
        default:
            return state
    }
}