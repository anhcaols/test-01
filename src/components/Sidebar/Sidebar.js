import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className={classNames('sidebar')}>
            <ul className={classNames('nav-bar')}>
                <li>
                    <Link to="#" className="active">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="#">Services</Link>
                </li>
                <li>
                    <Link to="#">News</Link>
                </li>
                <li>
                    <Link to="#">Blog</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
