import './App.css'
import Header from './compontents/Header'
import Main from './compontents/Main'
import Sidebar from './compontents/Sidebar'
import Footer from './compontents/Footer'

function App() {



  return (
    <>
    <div id='container'>
    <Header />
    <nav id="header-nav"></nav>
    </div>
    <div id='content'>
    <Sidebar />
    <nav id="sidebar-nav"></nav>
    <Main />
    <Footer />
    </div>
    </>
  )
}

export default App
