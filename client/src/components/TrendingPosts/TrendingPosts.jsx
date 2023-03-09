import './TrendingPosts.scss';

import TrendingPostsCard from '../TrendingPostsCard/TrendingPostsCard';

import gameImg1 from '../../assets/right-menu/game1-icon.png';
import gameImg2 from '../../assets/right-menu/game2-icon.png';
import gameImg3 from '../../assets/right-menu/game3-icon.png';
import gameImg4 from '../../assets/right-menu/game4-icon.png';

const TrendingPosts = () => {

    const posts = [
        {
            post: 'New game starting in 10mins!',
            time: 5,
            owner: 'Astrodragon',
            thumb: gameImg1
        },
        {
            post: "The new SIMS is out! I can't wait to play",
            time: 5,
            owner: 'Catio77',
            thumb: gameImg2
        },
        {
            post: 'Excited to watch the new Witcher season!',
            time: 120,
            owner: 'Enigma0',
            thumb: gameImg3
        },
        {
            post: 'My brain hurts from too much school work :(',
            time: 180,
            owner: 'Jimpxl',
            thumb: gameImg4
        }
    ]

    return (
        <div className='trending-post-container'>
            
            <div className='trending-post-container__header'>
                <h3>Trending Posts</h3>
                <a><p>See All</p></a>
            </div>

            {posts.map((p) => {
                return(
                    <TrendingPostsCard 
                        post={p.post} 
                        owner={p.owner}
                        time={p.time}
                        thumb={p.thumb} 
                    />
                )
            })}


        </div>
    )
}

export default TrendingPosts;