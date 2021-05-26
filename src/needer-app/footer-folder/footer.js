import React from "react";
import "./footer-style.css";
import fb from "./icons/facebook.svg";
import yt from "./icons/youtube.svg";
import tw from "./icons/twitter.svg";
import ist from "./icons/instagram.svg";
import {Link} from 'react-router-dom';

function Footer() {
	const ColoredLine = ({ color }) => (
		<hr
			style={{
				color: color,
				backgroundColor: color,
				height: 5,
				border: 0,
				margin: 0
			}}

		/>
	);
	//code
	return (
		<div class="footerNeeder">
			<div class="container">
				<section class="Info">
					<div class="title1">
						<ColoredLine color="#fc5183" class="hrUp" />
						<p>Informații</p>
						<ColoredLine color="#fc5183" class="hrDown" />
					</div>
					<article>
						<Link to= '/needer/aboutUs' >Despre noi și munca noastră </Link>
						</article>
					<article>
					 	<Link to='/needer/faqpage'>Întrebări frecvente</Link>
					</article>
				</section>
				<section class="Contact">
					<div class="title2">
						<ColoredLine color="#fc5183" class="hrUp" />
						<p>Contact</p>
						<ColoredLine color="#fc5183" class="hrDown" />
					</div>
					<article>
						<span>Scrieți-ne: </span>
						<span>
							<a href="mailto:proiectIP@info.uaic.ro">
								proiectIP@info.uaic.ro
							</a>
						</span>
					</article>
					<article>
						Sunați-ne: 0232 077 770
					</article>

				</section>

				<section class="Follow">
					<div class="title3">

						<ColoredLine color="#fc5183" class="hrUp" />
						<p>Urmăriți-ne</p>
						<ColoredLine color="#fc5183" class="hrDown" />
					</div>
					<div class="Icons">
						<img src={fb} id="fbIcon" alt="FaceBook Link" />
						<img src={tw} id="twIcon" alt="Twitter Link" />
						<img src={ist} id="istIcon" alt="Instageam Link" />
						<img src={yt} id="ytIcon" alt="Youtube Link" />
					</div>
				</section>
			</div>
			<ColoredLine color="#fc5183" />
			<div class="bottom-info">
				&copy;
						<span>
					{new Date().getFullYear()}
				</span>Proiect IP
 				</div>
		</div>
	)
}
export default Footer;