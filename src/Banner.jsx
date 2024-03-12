export default function Banner(){
    return(<>
    <div className="banner">
        <div className="banner-text">
        <h1>Tryoex-Track your expenses</h1>
        <p>Take control of your finances with Tryoex, the easy-to-use expense tracker that helps you manage your money on the go. Whether you're tracking personal expenses or business costs, Tryoex makes it simple to stay on top of your budget and financial goals.</p>
        <a href=""><img style={{width: '250px',height: '100px',paddingTop:'50px'}} src="src/assets/appstore.svg" alt="" /></a>
        </div>
        <img src="/src/assets/branding.png" alt="" />
        <br />
    </div>
    </>);
}