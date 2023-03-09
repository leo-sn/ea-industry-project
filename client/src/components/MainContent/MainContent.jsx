import './MainContent.scss'
import searchArrowR from '../../assets/center-menu/search-right.png'
import searchArrowL from '../../assets/center-menu/search-left.png'

const MainContent = (props) => {

    const { mainData } = props

    return (
        <div className='main-content-container'>
            <form>
                <div className='main-content-container--search'>
                    <img src={searchArrowL}></img>
                    <img src={searchArrowR}></img>
                    <input placeholder='Search games and add-ons'></input>
                </div>
            </form>
            <img className='main-content-container--main-image' src={mainData.img} alt="hero"/>
            <h1 className='main-content-container--title'>{mainData.title}</h1>
            <div className='main-content-container--info'>
                <p>· {mainData.owner}</p>
                <p>· {mainData.time}</p>
            </div>
            <button className='main-content-container--button'>JOIN</button>
        </div>

    )
}

export default MainContent;