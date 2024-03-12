import logo from './assets/logo.png'
export default function Navbar(){


    return(
        <div className="header">
            <div className='logo'>
            <img className='logo-img' src={logo} />
            <div className='logo-text'>Tryoex</div>
            </div>
            <div className="contact-me">
                <a href="">Contact us</a></div>
        </div>
    );
}