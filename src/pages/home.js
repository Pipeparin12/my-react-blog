import React from 'react'
import {MasonryPost, PostMasonry, PostGrid} from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0: {
        gridArea: ' 1 / 2 / 2 / 3'
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Parin Likhitworasak'
        post.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum incidunt inventore optio dolore hic facilis quam fuga, vel quidem molestiae impedit delectus necessitatibus rem aut consequatur? Quam, nam voluptas.'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

// const lastFeatured = featured.pop()

export default function Home () {
    return ( 
        <main className="home">
            <section className="container">
            <div className="row">
                <section className="featured-posts-container">
                <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                {/* <MasonryPost post={lastFeatured} tagsOnTop={true} /> */}
                </section>
            </div>
        </section>
        <section className="bg-white">
        <section className="container">
        <div className="row">
        <PostGrid posts={recentPosts} />
        </div>     
        </section>
        </section>
        <section className="container">
        <div className="row">
        <PostMasonry posts={trending} columns={3}/>
        </div>     
        </section>
        </main>
    )
}