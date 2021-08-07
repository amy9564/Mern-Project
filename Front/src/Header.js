import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

const Header = () => {
  return (
	    <div>
			<div className="container-fluid">
				<div className="row header">
					<div className="menu-area">
						<div className="navbar-start">
							<img className="navbar-logoimage" src="https://dl.dropboxusercontent.com/s/4chm975lublebuh/logo.jpg?dl=0" alt="Logo" />
                    		<a className="navbar-brand" href="/">Amitkeep</a>
						</div>
						<div className="navbar-unorderlist"> 
							<ul>
								<li className="navbar-list"><a href="/">Home</a></li>
								<li className="navbar-list"><a href="/">Merchandise</a>
									<ul className="dropdown">
										<li className="navbar-list1"><a href="/t-shirts">T-shits</a></li>
										<li className="navbar-list1"><a href="/">Gifts</a></li>
										<li className="navbar-list1"><a href="/">Crafts</a></li>
										<li className="navbar-list1"><a href="/">Painting</a>
											<ul className="dropdown-1">
												<li ><a href="/">Brush Painting</a></li>
												<li><a href="/">Color Painting</a></li>
												<li><a href="/">Sketch Painting</a></li>
												<li><a href="/">hand Painting</a></li>
											</ul>
										</li>
										<li className="navbar-list1"><a href="/">Bookmarks</a></li>
										<li className="navbar-list1"><a href="/">Skins</a></li>
									</ul>
								</li>
								<li className="navbar-list"><a href="/artwork">Artwork</a></li>
								<li className="navbar-list"><a href="/">Customised</a></li>
								<li className="navbar-list"><a href="/contact">Contact</a></li>
							</ul>
						</div>
						<form className="form-inline">
      						<input className="form-control navbar-input" type="search" placeholder="Search" />
						</form>
						<ul className="header-buttons">
							<li><NavLink to="/login" className="artist-button" ><img className="avtar-class" src="https://dl.dropboxusercontent.com/s/zb9ffe7hgnadngs/avtar.png?dl=0" alt="random_image" /><span>Artist</span></NavLink></li>
							<li><NavLink to="/login" className="customer-button" ><img className="avtar-class" src="https://dl.dropboxusercontent.com/s/zb9ffe7hgnadngs/avtar.png?dl=0" alt="random_image" /><span>Customer</span></NavLink></li>
							<li><NavLink to="button" className="cart-button" ><span className="cart-class"><ShoppingCartRoundedIcon /></span></NavLink></li>
						</ul>
						</div>
					</div>
				</div>
			</div>  
		);
}

export default Header;
