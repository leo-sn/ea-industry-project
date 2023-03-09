import './TrendingPostsCard.scss';

const TrendingPostsCard = (props) => {

    const {post, owner, thumb, time} = props;

    return (
        <div className='trending-post-cards-container'>
            <img className='trending-post-cards-container__thumb'src={thumb} alt={post}/>
            <div className='trending-post-cards-container__text-container'>
                <p className='trending-post-cards-container__text-container--title'>{post}</p>
                <div className='trending-post-cards-container__text-container--info'>
                    <p>{time} minutes ago</p>
                    <span>·</span>
                    <p>By {owner}</p>
                </div>
            </div>

        </div>
    )
}

export default TrendingPostsCard;