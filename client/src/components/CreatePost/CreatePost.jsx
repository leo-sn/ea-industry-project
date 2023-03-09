import './CreatePost.scss';

import uploadImgIcon from '../../assets/center-menu/uploadImg-icon.png';
import linkIcon from '../../assets/center-menu/link-icon.png';


const CreatePost = (props) => {

    const { userData } = props;


    return (
        <div className='create-post-container'>
            <div className='create-post-container__upper'>
                <img className='create-post-container__upper--profile-image' src={userData.profilePicture}/>
                <form>
                    <input className='create-post-container__upper--input' placeholder='What’s on your mind?'></input>
                </form>
            </div>
            <div className='create-post-container__under'>
                <img className='create-post-container__under--upload-icon' src={uploadImgIcon}/>
                <img className='create-post-container__under--link-icon' src={linkIcon}/>
            </div>

        </div>
    )
}

export default CreatePost;