import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'

import {connect} from 'react-redux'
import {BUSCAR_VIDEO} from '../store/actions/busca-videos' 

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.props.BUSCAR_VIDEO('caio')
    }

    handleChange = (e) => {
        if (e.keyCode === 13) {  
            const valor = e.target.value
            console.log(valor)
            this.props.BUSCAR_VIDEO(valor)
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <h1>
                    <Segment stacked>
                        <Input icon='search' size='large' placeholder='Search...' onKeyDown={(e) => this.handleChange(e)} />
                    </Segment>
                </h1>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        BUSCAR_VIDEO: (termo)=>dispatch(BUSCAR_VIDEO(termo))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SearchBar)