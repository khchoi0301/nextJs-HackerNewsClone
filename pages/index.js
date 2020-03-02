import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import Error from 'next/error'

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

        return <div>
            <h1>
                hacker next
                </h1>
            <div>
                {stories.map(story => (<h2>{story.title}</h2>))}
            </div>
        </div>;
    }
}

export default Index;