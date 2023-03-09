import './ProfileRow.scss';
import profileImage from '../../assets/right-menu/profile-icon.png'
import arrowDownIcon from '../../assets/right-menu/arrow-down-icon.png'
import chatIcon from '../../assets/right-menu/chat-icon.png'
import notificationIcon from '../../assets/right-menu/notification-icon.png'

const ProfileRow = () => {

    const userData = {
        profileName: 'Amanda88',
        profilePicture: profileImage
    }

    return (
        <>
        <div className='profile-container'>
            <div className='profile-container__info'>
                <img className='profile-container__info--profile-image' src={userData.profilePicture} />
                <h5 className='profile-container__info--profile-name'>{userData.profileName}</h5>
                <img className='profile-container__info--profile-icon-arrow' src={arrowDownIcon}/>
            </div>
            <div className='profile-container__icons'>
                <img className='profile-container__icons--chat-icon' src={chatIcon}/>
                <img className='profile-container__icons--notification-icon' src={notificationIcon}/>
            </div>
        </div>
        </>
    )
}

export default ProfileRow;