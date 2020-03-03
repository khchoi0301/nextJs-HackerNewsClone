import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../component/StoryList'
import Layout from '../component/Layout'

class Index extends Component {
    static async getInitialProps() {
        let stories = [];
        try {
            const response = await fetch("https://node-hnapi.herokuapp.com/news?page=1");
            stories = await response.json()
        } catch (error) {
            console.log(error)
        }
        return { stories }
    }

    render() {
        const { stories } = this.props

        if (stories.length === 0) {
            return <Error statusCode={503} />
        }

        return (<Layout title='Hacker Next' description="A Hacker New made with Next.js" >
            <StoryList stories={stories} />
        </Layout>);
    }
}

export default Index;