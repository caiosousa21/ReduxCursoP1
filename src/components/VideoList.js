import React from 'react'

import { List, Image } from 'semantic-ui-react'

const VideoList = props => {
    return (
        <div className='video-list'>
        <h1>
            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='http://lorempixel.com/output/nature-q-c-147-136-3.jpg' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='http://lorempixel.com/output/nature-q-c-147-136-3.jpg' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='http://lorempixel.com/output/nature-q-c-147-136-3.jpg' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='http://lorempixel.com/output/nature-q-c-147-136-3.jpg' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='http://lorempixel.com/output/nature-q-c-147-136-3.jpg' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List></h1>
        </div>
    )
}
export default VideoList