import React from 'react'
import styled from 'styled-components'

const CardMakerUserDiv = styled.div`
    border: 1px solid black;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserImg = styled.img`
    width: 200px;
    border-radius: 20px;
`


export default class CardMakerUser extends React.Component {

    render() {

        if (!this.props.userData) {return null}
        return (
            <CardMakerUserDiv>
                <h3>{this.props.userData.name}</h3>
                <UserImg alt="user" src={this.props.userData.avatar_url}/>
                <span>{this.props.userData.bio}</span>
                <p>Login: {this.props.userData.login}</p>
                <p>{this.props.userData.followers} followers</p>
                <p></p>
            </CardMakerUserDiv>
        )
    }
}