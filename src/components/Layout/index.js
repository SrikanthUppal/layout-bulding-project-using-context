import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

const Layout = () => (
  <div className="layout-container">
    <div className="layout-responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)
export default Layout
