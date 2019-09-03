import React from 'react'
import styled from 'styled-components'

const CardMakerUserDiv = styled.div`
    border: 1px solid black;
    width: 700px;
`


export default class CardMakerUser extends React.Component {

    render() {

        if (!this.props.userData) {return null}
        return (
            <CardMakerUserDiv>
                <h3>{this.props.userData.name}</h3>
                <img alt="user" src={this.props.userData.avatar_url}/>
                <span>{this.props.userData.bio}</span>
                <p>Login: {this.props.userData.login}</p>
                <p>{this.props.userData.followers} followers</p>
                <p></p>
            </CardMakerUserDiv>
        )
    }
}