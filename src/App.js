import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

import Main from './components/Main/Main'

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default App
