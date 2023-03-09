import './OnlineRow.scss';
import FriendsCard from '../FriendsCard/FriendsCard';

const OnlineRow = () => {

    return (
        <>
            <div className='online-container'>
                <h3 className='online-container--title-top'>Online</h3>
                <div>
                    <FriendsCard/>
                </div>
                <div className='online-container__title-bottom' >
                    <h4 className='online-container__title-bottom--text'>FIND FRIENDS</h4>
                </div>

            </div>
        </>
    )
}

export default OnlineRow;