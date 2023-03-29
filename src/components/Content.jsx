import mobil from "../assets/mobil.jpg";
export default function Content() {
	return (
		<div id="barang">
			{[...Array(10)].map((x, i) => (
				<Barang key={i} />
			))}
		</div>
	);
}

function Barang() {
	return (
		<div className="card">
			<div className="barang-item col col-barang full-column">
				<img className="barang-img" src={mobil} alt="" />
				<h1 className="barang-price">Rp.2000.000.000</h1>
				<p className="tahun">2020</p>
				<p className="barang-name">BMW 320i F35 Sport Facelift</p>
				<p className="place">Batam Center, Batam</p>
			</div>
		</div>
	);
}
