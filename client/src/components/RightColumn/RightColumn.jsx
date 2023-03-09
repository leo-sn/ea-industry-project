import './RightColumn.scss'
import ProfileRow from '../ProfileRow/ProfileRow';
import OnlineRow from '../OnlineRow/OnlineRow';
import TrendingPosts from '../TrendingPosts/TrendingPosts';

const RightColumn = () => {

    return (
        <>
            <div className='right-menu'>
                <ProfileRow />
                <OnlineRow />
                <TrendingPosts />
            </div>
        </>
    )
}

export default RightColumn;