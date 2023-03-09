import './CenterColumn.scss';
import MainContent from "../MainContent/MainContent";
import CreatePost from "../CreatePost/CreatePost";
import mainImg from '../../assets/center-menu/main-image.png';
import profileImage from '../../assets/center-menu/profile-picture.png'
import TagsFilter from '../TagsFilter/TagsFilter';
import Post from '../Post/Post';

import user1ProfileImg from '../../assets/post-assets/post1-profile.png';
import postImg from '../../assets/post-assets/post1-image.png';
import user2ProfileImg from '../../assets/post-assets/post2-profile.png';


const CenterColumn = () => {

    const mainData = {
        img: mainImg,
        title: 'Star Wars Challenge',
        owner: 'ELEVATE',
        time: 'Start at 08:00 PM EST',
    }

    const userData = {
        profileName: 'Amanda88',
        profilePicture: profileImage
    }

    const filterList = [
        {
            filter: '🔥 All',
        },
        {
            filter: '💥 RTS',
        },
        {
            filter: '⭐️ Survival',
        },
        {
            filter: '🤖 RPG',
        },
        {
            filter: '🔫 FPS',
        },
        {
            filter: '📱 MOBA',
        },
        {
            filter: '💣 Sandbox',
        }
    ]

    const posts = [
        {
            postUserName: 'SabrinaLestrania98',
            postTime: 17,
            userImg:user1ProfileImg,
            postImg: postImg,
            postTitle: 'The new SIMS features are out!',
            postDescription: "I can’t wait to play! Who’s with me?",
            postLikesCount: 400,
            postCommentsCount: 30,
        },
        {
            postUserName: 'Happycat',
            postTime: 17,
            userImg:user2ProfileImg,
            postImg: false,
            postTitle: "Any new recommendations on shows to watch?",
            postDescription: "So bored right now...",
            postLikesCount: 400,
            postCommentsCount: 30,
        }
    ]

    return (
        <div className="center-column-container">
            <MainContent mainData={mainData} />
            <CreatePost userData={userData}/>
            <div className='center-column-container--filters'>
                {filterList.map((f) => {
                    return (
                        <TagsFilter filter={f.filter}/>
                    )
                })}
                
            </div>
            <div>
                {posts.map((p) => {
                    return(
                        <Post postData={p}/>
                    )
                })}
            </div>

        </div>
    )
}

export default CenterColumn;