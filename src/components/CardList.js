import React from 'react'
import axios from 'axios'

import CardMakerUser from './CardMakerUser'
import CardMakerFollowers from './CardMakerFollowers'

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
            // .then(res => res.json())
            // .then(res => this.setState({ userCard: res }))
        axios.get(`https://api.github.com/users/${inputUserName}/followers`)
            .then( (res) => {
                console.log(res)
                this.setState({ followerCards: res.data})
            })
            // .then(res => res.json())
            // .then(res => this.setState({ followerCards: res }))
    }

    render() {
        return (
            <section className='cardList'>
                <CardMakerUser userData={this.state.userCard} />
                {this.state.followerCards.map( (follower) => {
                    return <CardMakerFollowers followerData={follower}/>
                })}               
            </section>
        )
    }
}