import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import Content from './components/Content/Content'
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
                    <Content />
                </div>
                <Footer />
            </GlobalStyles>
        </div>
    )
}

export default App
