import './Post.scss';
import likeIcon from '../../assets/post-assets/like-icon.png';
import commentIcon from '../../assets/post-assets/comment-icon.png';
import shareIcon from '../../assets/post-assets/share-icon.png';



const Post = (props) => {

    const { postData } = props;

    return (

        <div className='post-container'>
            <div className='post-container__user'>
                <img className='post-container__user--image' src={postData.userImg}/>
                <div className='post-container__user--data'>
                    <p className='post-container__user--data-name'>{postData.postUserName}</p>
                    <p className='post-container__user--data-time'>{postData.postTime} minutes ago</p>
                </div>
            </div>
            <div className='post-container__data'> 
                <img className='post-container--img'src={postData.postImg}/>
                <div className='post-container__content'>
                    <div>
                        <h4>{postData.postTitle}</h4>
                        <p className='post-container__content--description'>{postData.postDescription}</p>
                    </div>
                    <div className='post-container__info-container'>
                        <div className='post-container__info-container--info'>
                            <img src={likeIcon} alt='like icon'/>
                            <p className='post-container__info-container--info'>{postData.postLikesCount} Likes</p>
                        </div>
                        <div className='post-container__info-container--info'>
                            <img src={commentIcon} alt='comment icon'/>
                            <p>{postData.postCommentsCount} Likes</p>
                        </div>
                        <div className='post-container__info-container--info'>
                            <img src={shareIcon} alt='share icon'/>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post;