import navIcon from "../../assets/homeicon.webp";
import './home.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={navIcon}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              ></img>
              Library
            </a>
            <div>
               <Link to='/signIn'>
              <button className="btn btn-outline-warning btn-sm">signin</button>
               </Link>
               <Link to='/signUp'>
               <button className="btn btn-warning btn-sm me-5 ms-3">
                signup
              </button>
               </Link>
            
            </div>
          </div>
        </nav>
        <main>
          <div className="home-img">
            <div className="content-overlay">
               <h1 > "When in doubt go to the library"</h1>
               <p>Please signin with your accout and explore Knowledge with us!</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Home;
