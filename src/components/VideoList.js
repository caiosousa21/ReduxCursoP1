import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, Image, Dimmer, Loader} from 'semantic-ui-react'

import {REPRODUZ_VIDEO} from '../store/actions/reproduz-video'

class VideoList extends Component {
    renderVideo(video) {
        return (
            <List.Item key={video.etag} onClick={()=>this.props.reproduz(video)}>
                <Image src={video.snippet.thumbnails.default.url} />
                <List.Content>
                    <List.Header>{video.snippet.title}</List.Header>
                </List.Content>
            </List.Item>

        )
    }

    render() {
        return (
            <div className='video-list'>
            {
                    this.props.carregando && (
                        <Dimmer active inverted>
                            <Loader size='medium'>Carregando...</Loader>
                        </Dimmer>
                        )
            }
                <List animated verticalAlign='middle'>
                    {
                        this.props.videos.map(video => {
                            console.log('video', video)
                            return this.renderVideo(video)
                        })
                    }
                </List>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        reproduz:(video)=>dispatch(REPRODUZ_VIDEO(video))
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoList)