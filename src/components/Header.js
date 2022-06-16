
export const Header = () => {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img src="/img/logo.svg" width={40} height={40} alt="" />
				<div>
					<h3 className="text-uppercase">
						react sneakers
					</h3>
					<p>
						Магазин лучших кроссовок
					</p>
				</div>
			</div>
			<ul className="d-flex ">
				<li className="basket mr-30">
					<img src="/img/card.svg" width={18} height={18} alt="" />
					<span>1205 руб.</span>
				</li>
				<li className="mr-30">
					<img src="/img/favorite.svg" width={18} height={18} alt="" />

				</li>
				<li>
					<img src="/img/user.svg" width={18} height={18} alt="" />
				</li>
			</ul>
		</header>
	);
}

export default Header;