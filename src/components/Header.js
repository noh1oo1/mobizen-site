const Header = () =>{

	return(
		<section className="sec_header">
			<div className="inner">
				<div className="header">
					<h1 className="logo">
						<img src="./img/logo-mobien.png" alt="logo"/>
					</h1>
					<ul className="gnb">
						<li className="active"><a href="#">HOME</a></li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">Helpdesk</a></li>
						<li><a href="#">Login</a></li>
						<li><a href="#">무료시작하기</a></li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Header;