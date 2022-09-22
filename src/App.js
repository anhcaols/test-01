import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import Main from './components/Main/Main'
import images from './assets'

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <div className="logo">
                    <img src={images.logo} alt="img" />
                </div>
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default App
