export default function Product() {
	const data = [
		{
			url: "https://www.pngplay.com/wp-content/uploads/13/Ford-Raptor-Transparent-Image.png",
			harga: "Rp.11.000.000.000,- ",
			name: "Ford SUV",
			info: "Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States.",
			lokasi: "Michigan, United States",
			tanggal: "1 Desember",
		},
		{
			url: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgoRnIl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uRCHqoQh47wMvcYi9SDBJMb3islBglUQ3FcRScHzGlMbnMdQgayJGy53uKrQ%25r9RbFW8zWubDCqogqaJh5l3ilUQTqcRScH8ZAMbnMd09RyJGy5BoorQ%25r9YbJW8zWuEb2qogqaFSQl3ilU%25docRScHzo9MbnMdg3YyJGy5iRBrQ%25r9SEUW8zWunFbqogqaGCel3ilU%25bQcRScHzJmMbnMdg7oyJGy5i0BrQ%25r9SDFW8zWunC%25qogqaGJOl3ilU%25D8cRScHzD9MbnMdgCEyJGy5muBrQ%25r9sEGW8zWuKbGqogqaDJ6l3ilUCQDcRScH486MbnMdezJyJGy5QoarQ%25r98BYW8zWuobGqogqa3Jnl3ilUR%250cRScHbRfMbnMdJCYyJGy5Q4BrQ%25r99uDW8JYHltW7%25XlWrQb9%25cQSW7%25IER8MI8YHQA",
			harga: "Rp.2.000.000.000,- ",
			name: "BMW Sport Car",
			info: "Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria.",
			lokasi: "Bavaria, Germany",
			tanggal: "2 Desember",
		},
		{
			url: "https://i.ytimg.com/vi/BgKUmzkFKUo/maxresdefault.jpg",
			harga: "Rp.3.000.000.000,- ",
			name: "Subaru Imprezza",
			info: "Subaru is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation (formerly known as Fuji Heavy Industries).",
			lokasi: "Ebisu, Shibuya, Japan",
			tanggal: "3 Desember",
		},
		{
			url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-G-63/9737/1679289361128/front-left-side-47.jpg",
			harga: "Rp.5.000.000.000,- ",
			name: "Marcedes-Benz",
			info: "Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926.",
			lokasi: "Stuttgart, Baden-Württemberg, Germany",
			tanggal: "4 Desember",
		},
		{
			url: "https://www.mobilinanews.com/cdn/posts/1/2020/2020-03-22/4b56945b4c47eda6090f7beb93c2025c_1.jpg",
			harga: "Rp.2.000.000.000,- ",
			name: "Toyota GT 86",
			info: "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan.",
			lokasi: "Japan",
			tanggal: "5 Desember",
		},
		{
			url: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgoRnIl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uRCHqoQh47wMvcYi9SDBJMb3islBglUQ3FcRScHzGlMbnMdQgayJGy53uKrQ%25r9RbFW8zWubDCqogqaJh5l3ilUQTqcRScH8ZAMbnMd09RyJGy5BoorQ%25r9YbJW8zWuEb2qogqaFSQl3ilU%25docRScHzo9MbnMdg3YyJGy5iRBrQ%25r9SEUW8zWunFbqogqaGCel3ilU%25bQcRScHzJmMbnMdg7oyJGy5i0BrQ%25r9SDFW8zWunC%25qogqaGJOl3ilU%25D8cRScHzD9MbnMdgCEyJGy5muBrQ%25r9sEGW8zWuKbGqogqaDJ6l3ilUCQDcRScH486MbnMdezJyJGy5QoarQ%25r98BYW8zWuobGqogqa3Jnl3ilUR%250cRScHbRfMbnMdJCYyJGy5Q4BrQ%25r99uDW8JYHltW7%25XlWrQb9%25cQSW7%25IER8MI8YHQA",
			harga: "Rp.2.000.000.000,- ",
			name: "BMW Sport Car",
			info: "Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria.",
			lokasi: "Bavaria, Germany",
			tanggal: "2 Desember",
		},
		{
			url: "https://i.ytimg.com/vi/BgKUmzkFKUo/maxresdefault.jpg",
			harga: "Rp.3.000.000.000,- ",
			name: "Subaru Imprezza",
			info: "Subaru is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation (formerly known as Fuji Heavy Industries).",
			lokasi: "Ebisu, Shibuya, Japan",
			tanggal: "3 Desember",
		},
		{
			url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-G-63/9737/1679289361128/front-left-side-47.jpg",
			harga: "Rp.5.000.000.000,- ",
			name: "Marcedes-Benz",
			info: "Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926.",
			lokasi: "Stuttgart, Baden-Württemberg, Germany",
			tanggal: "4 Desember",
		},
	];

	return (
		<div className="background">
			<div className="container2">
				<p>REKOMENDASI BARU</p>
				<div id="img-jualan">
					{data.map((val) => (
						<Card
							url={val.url}
							name={val.name}
							harga={val.harga}
							info={val.info}
							lokasi={val.lokasi}
							tanggal={val.tanggal}
						/>
					))}
				</div>
				<div className="next">
					<button>
						{" "}
						MUAT LAINNYA
						{/* <a href="App2.js">MUAT LAINNYA</a> */}
					</button>
				</div>
			</div>
		</div>
	);
}

function Card(props) {
	return (
		<div className="card">
			<div className="gambar">
				<img src={props.url} alt="member" width="100%" height="100%" />
			</div>
			<div className="info">
				<div className="harga">{props.harga}</div>
				<div className="namaBarang">{props.name}</div>
				<div className="infoTambahan">{props.info}</div>
				<div className="lokasi">
					<div>{props.lokasi}</div>
					<div>{props.tanggal}</div>
				</div>
			</div>
		</div>
	);
}
