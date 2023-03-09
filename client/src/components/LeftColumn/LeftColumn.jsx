import './LeftColumn.scss'

import logo from '../../assets/left-menu/elevate-logo.png';
import homeIcon from '../../assets/left-menu/home-icon.png';
import browseIcon from '../../assets/left-menu/browse-icon.png';
import libraryIcon from '../../assets/left-menu/library-icon.png';
import communityIcon from '../../assets/left-menu/community-icon.png';
import tournamentsIcon from '../../assets/left-menu/tournaments-icon.png';
import resourcesIcon from '../../assets/left-menu/resources-icon.png';
import downloadManagerIcon from '../../assets/left-menu/download-manager-icon.png';

const LeftColumn = () => {

    const menusTop = [
        {name: 'Home',
        icon: homeIcon
        },
        {name: 'Browse',
        icon: browseIcon
        },
        {name: 'Library',
        icon: libraryIcon
        },
        {name: 'Community',
        icon: communityIcon
        },
        {name: 'Tournaments',
        icon: tournamentsIcon
        },
        {name: 'Resources',
        icon: resourcesIcon
        }
    ]

    const menusBottom = [{
        name:'Download Manager',
        icon:downloadManagerIcon
    }]

    return (
        <>
        <div className='menu'>
            <div className='menu--each'>
                <img className='menu--logo' src={logo} alt={logo}></img>
                {menusTop.map((m) => {
                    return(
                        <div className='menu__items'>
                            <div className='menu__items--imgcontainer'>
                                <img src={m.icon} alt={m.name}/>
                            </div>
                            <div className='menu__items--txtcontainer'>
                                <p>{m.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='menu-bottom'>
            <div>
                {menusBottom.map((m) => {
                    return(
                        <div className='menu-bottom__items'>
                            <div className='menu-bottom__items--imgcontainer'>
                                <img src={m.icon} alt={m.name}/>
                            </div>
                            <div className='menu-bottom__items--txtcontainer'>
                                <p>{m.name}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        
        </>
    )
}

export default LeftColumn;