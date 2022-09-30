import './NavBar.css'
import logo from './odatexchange.png'

export default function NavBar() {


    return (
        <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
          <img src={logo} id='logo'/>
            <div className='website-title'> Odat Exchange </div>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <a href="#" target="_blank">Home Page</a>
          <a href="https://www.google.com/finance/" target="_blank">Stocks</a>
          <a href="#" target="_blank">About Us</a>
         
        </div>
      </div>

    )

}