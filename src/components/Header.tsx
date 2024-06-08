import { NavLink, Link } from "react-router-dom";

const Header = (props: any) => {
  const { brandName, contactPage,productPage,signin,signup, category} = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to={'/'} className="navbar-brand" >
            {brandName}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link active" aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'products'} className="nav-link" >
                  {productPage}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={'contact-us'} className="nav-link "  aria-disabled="true">
                  {contactPage}
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to={'category'} className="nav-link " aria-disabled="true">
                  {category}
                </Link>
              </li>
            </ul>
           <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={'signin'}  className="nav-link disabled">{signin}</Link>
            </li>
            <li className="nav-item">
                <Link to={'signup'} className="nav-link disabled">{signup}</Link>
            </li>
           </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
