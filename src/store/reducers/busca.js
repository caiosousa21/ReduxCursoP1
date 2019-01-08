const initialState = {
    videos: [],
    carregando: false,
    erro: false,
}

export default function busca(state = initialState, action) {
    switch (action.type) {
        case 'INICIO_BUSCA':
            return {
                ...state,
                carregando: true,
            }
        case 'BUSCAR_VIDEO_SUCESSO':
            return {
                carregando: false,
                videos: action.videos,
                erro: false,
            }
        case 'BUSCAR_VIDEO_FALHA':
            return {
                videos: [],
                carregando: false,
                erro: true,
            }
        default:
            console.log(action.type)
            return state
    }
}