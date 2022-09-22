import './Sidebar.css'
import classNames from 'classnames'
function Sidebar() {
    return (
        <div className={classNames('sidebar')}>
            <ul className={classNames('nav-bar')}>
                <li>
                    <a href="#" className="active">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
