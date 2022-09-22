import './Header.css'
import classNames from 'classnames'
import images from '../../assets'
function Header() {
    return (
        <div className="header">
            <img src={images.logo} alt="" />
        </div>
    )
}

export default Header
