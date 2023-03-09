import './FriendsCard.scss';

import friendAvatar1 from '../../assets/right-menu/avatar1-icon.png'
import friendAvatar2 from '../../assets/right-menu/avatar2-icon.png'
import friendAvatar3 from '../../assets/right-menu/avatar3-icon.png'
import friendAvatar4 from '../../assets/right-menu/avatar4-icon.png'
import onlineIcon from '../../assets/right-menu/status-on.png'
import offlineIcon from '../../assets/right-menu/status-off.png'

const FriendsCard = () => {

    const friendList = [
        {
            friendAvatar: friendAvatar1,
            friendName: 'Annette Black',
            friendGame: 'Dying Light 2',
            friendStatus: true,
            friendOnTime:1
        },
        {
            friendAvatar: friendAvatar2,
            friendName: 'Arlene McCoy',
            friendGame: 'PUBG',
            friendStatus: true,
            friendOnTime:1
        },
        {
            friendAvatar: friendAvatar3,
            friendName: 'Kristin Watson',
            friendGame: false,
            friendStatus: false,
            friendOnTime: 10
        },
        {
            friendAvatar: friendAvatar4,
            friendName: 'Annette Black',
            friendGame: false,
            friendStatus: false,
            friendOnTime: 20
        },

    ]
    
    return (
        <>
            {friendList.map((f) => {
                return (
                    <div className='friend-card-container'>
                        <div className='friend-card-container__info'>
                            <img className='friend-card-container--avatar' src={f.friendAvatar}/>
                            <div className='friend-card-container__text'>
                                <p>{f.friendName}</p>
                                <p>{(f.friendGame ? `Playing ${f.friendGame}` : `Online ${f.friendOnTime} minutes ago`)}</p>
                            </div>
                        </div>
                        <img className='friend-card-container--status' src={(f.friendStatus ? onlineIcon : offlineIcon)}/>
                    </div>
                )
            })}
        </>
        
    )
}

export default FriendsCard;