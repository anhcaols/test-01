import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import Main from './components/Content/Main'
import images from './assets'
import GlobalStyles from './components/GlobalStyles/GlobalStyles'

function App() {
    return (
        <div className="app">
            <GlobalStyles>
                <Sidebar />
                <div className="content">
                    <div className="logo">
                        <img src={images.logo} alt="img" />
                    </div>
                    <Main />
                </div>
                <Footer />
            </GlobalStyles>
        </div>
    )
}

export default App
