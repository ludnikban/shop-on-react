import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="Header">
        <header className="page-header">

    <div className="page-header__navbar">
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light">

                <a className="navbar-brand" href="#">
                    <img src="./img/icon-3.png" alt="site logo" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Lorem ipsum dolor</a>
                                <a className="dropdown-item" href="#">Sit amet</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Consectetur adipisicing </a>
                                <a className="dropdown-item" href="#">Architecto consequatur</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Payment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shipping</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 page-header__navbar-search">
                        <input className="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i
                                className="fas fa-search" aria-hidden="true"></i></button>
                    </form>
                    <button className="btn btn-outline-success my-2 my-sm-0 page-header__cart-btn" type="submit"><i
                        className="fas fa-shopping-cart" aria-hidden="true"></i><span id="cart-counter"
                                                                                      className="page-header__cart-counter">4</span>
                    </button>
                </div>

            </nav>

        </div>
    </div>

    <div className="page-header__carousel">
        <div className="container">

            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#header-carousel" data-slide-to="1"></li>
                    <li data-target="#header-carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./img/slide.png" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Slide #1</h3>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/slide.png" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Slide #2</h3>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./img/slide.png" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Slide #3</h3>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#header-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    </div>

</header>
</div>
);
}

export default Header;