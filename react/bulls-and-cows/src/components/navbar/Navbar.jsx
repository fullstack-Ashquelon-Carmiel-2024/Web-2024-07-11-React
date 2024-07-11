import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-main">
     <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="#">
        {/* <img src="./shopping-cart-red-wheels.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> */}
        Bulls and Cows
      </a>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
           <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Add User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Bulls and Cows Game</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div> 
  </nav>
  )
}
