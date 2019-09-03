import React from 'react'
import styled from 'styled-components'

const CardMakerFollowerDiv = styled.div`
    border: 1px solid black;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FollowerImg = styled.img`
    width: 200px;
    border-radius: 20px;
`


export default class CardMakerUser extends React.Component {

    render() {

        if (!this.props.followerData) {return null}
        return (
            <CardMakerFollowerDiv>
                <h3>{this.props.followerData.name}</h3>
                <FollowerImg alt="user" src={this.props.followerData.avatar_url}/>
                <span>{this.props.followerData.bio}</span>
                <p>Login: {this.props.followerData.login}</p>
                <p>URL: {this.props.followerData.url}</p>
                <p></p>
            </CardMakerFollowerDiv>
        )
    }
}