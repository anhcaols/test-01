import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Main from './components/Main/Main'

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default App
