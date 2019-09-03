import React from 'react'
import styled from 'styled-components'

const CardMakerFollowerDiv = styled.div`
    border: 1px solid black;
    width: 700px;
`


export default class CardMakerUser extends React.Component {

    render() {

        if (!this.props.followerData) {return null}
        return (
            <CardMakerFollowerDiv>
                <h3>{this.props.followerData.name}</h3>
                <img alt="user" src={this.props.followerData.avatar_url}/>
                <span>{this.props.followerData.bio}</span>
                <p>Login: {this.props.followerData.login}</p>
                <p>{this.props.followerData.followers} followers</p>
                <p></p>
            </CardMakerFollowerDiv>
        )
    }
}