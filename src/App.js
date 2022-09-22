import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import Main from './components/Content/Main'
import images from './assets'
import MainLayout from './components/MainLayout/MainLayout'

function App() {
    return (
        <div className="app">
            <MainLayout>
                <Sidebar />
                <div className="content">
                    <div className="logo">
                        <img src={images.logo} alt="img" />
                    </div>
                    <Main />
                </div>
                <Footer />
            </MainLayout>
        </div>
    )
}

export default App
