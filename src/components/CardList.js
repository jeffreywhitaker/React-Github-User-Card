import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import CardMakerUser from './CardMakerUser'
import CardMakerFollowers from './CardMakerFollowers'

const CardListSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class CardList extends React.Component {
    constructor() {
        super()
        this.state = { userCard: null, followerCards: [] }
    }

    componentDidMount() {
        const inputUserName = "jeffreywhitaker"
        axios.get(`https://api.github.com/users/${inputUserName}`)
            .then( (res) => {
                console.log(res)
                this.setState({ userCard: res.data})
            })
        axios.get(`https://api.github.com/users/${inputUserName}/followers`)
            .then( (res) => {
                console.log(res)
                this.setState({ followerCards: res.data})
            })
    }

    render() {
        return (
            <CardListSection className='cardList'>
                <CardMakerUser userData={this.state.userCard} />
                {this.state.followerCards.map( (follower) => {
                    return <CardMakerFollowers followerData={follower} key={follower.id}/>
                })}               
            </CardListSection>
        )
    }
}