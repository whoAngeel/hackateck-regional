import React from "react";
import { div } from "three/webgpu";
import BentoCard from "./BentoCard";
import { Button, Tooltip } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function BentoCards() {
	return (
		<div>
			<h2 className="text-center text-3xl font-bold py-4">
				Recaudaciones Destacadas
			</h2>
			<div className="grid grid-cols-5 grid-rows-6 gap-0 w-10/12 mx-auto">
				<div className=" col-start-3 col-end-6 row-start-1 row-end-5 h-[26rem] p-4">
					<BentoCard
						titulo="Proyecto Solar"
						img="https://picsum.photos/500/800"
						recaudado={1000}
						meta={1900}
					/>
				</div>
				<div className=" col-start-1 col-end-3 row-start-1 row-end-3 h-52 p-4">
					<BentoCard
						titulo={"Elemento 2"}
						img="https://picsum.photos/300/400"
						recaudado={1200}
						meta={2040}
					/>
				</div>
				<div className=" col-start-1 col-end-3 row-start-3 row-end-5 h-52 p-4">
					<BentoCard
						titulo={"Elemento 1"}
						img="https://picsum.photos/500/800"
						recaudado={700}
						meta={1500}
					/>
				</div>
				<div className=" col-start-1 col-end-3 row-start-5 row-end-7 h-52 p-4">
					<BentoCard
						titulo={"Elemento 1"}
						img="https://picsum.photos/500/800"
						recaudado={1000}
						meta={1300}
					/>
				</div>
				<div className=" col-start-3 col-end-5 row-start-5 row-end-7  h-52 p-4">
					<BentoCard
						titulo={"Elemento 3"}
						img="https://picsum.photos/540/700"
						recaudado={800}
						meta={100}
					/>
				</div>
				<div className=" col-start-5 col-end-6 row-start-5 row-end-7 h-52 p-4">
					<div className="flex justify-end items-end h-full">
						<Tooltip title="Ver más">
							<Link to="/crowdfunding/all">
								<Button
									type="primary"
									shape="circle"
									size="large"
									icon={<GoArrowUpRight />}
								/>
							</Link>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BentoCards;
