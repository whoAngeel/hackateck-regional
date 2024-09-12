import { Button, Input, InputNumber, Modal, Slider } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCollectedAmount, updateFund } from "../../redux/funding/fund.slice";

function ModalFund({ open, setOpen, fund }) {
	const handleClose = () => setOpen(false);
	const dispatch = useDispatch();
	const [amount, setAmount] = useState(0);
	const handleSliderChange = (value) => {
		setAmount(value);
	};
	const handleDonate = () => {
		// updateCollected(fund.id, amount);
		dispatch(updateCollectedAmount({ id: fund.id, amount }));
		setAmount(0);
		setOpen(false);
	};
	return (
		<Modal open={open} onOk={handleClose} footer onCancel={handleClose} centered>
			<div>
				<img
					src={fund?.image}
					alt={fund?.name}
					className="w-full object-cover"
				/>
				<div className="flex flex-col gap-2">
					<h1 className="text-lg font-bold">{fund.name}</h1>
					<p className="text-xs">{fund.description}</p>
					<p className="text-lg font-medium">
						Recaudado: ${fund.collected} / ${fund.fundingGoal}
					</p>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<h3 className="text-lg font-bold">Apoyar</h3>
					<Slider
						min={0}
						max={fund.fundingGoal - fund.collected} // Máximo basado en lo que falta recaudar
						onChange={handleSliderChange}
						value={typeof amount === "number" ? amount : 0}
					/>
					<Button
						type="primary"
						onClick={handleDonate}
						disabled={amount <= 0}
					>
						Aumentar Recaudación
					</Button>
				</div>
			</div>
		</Modal>
	);
}

export default ModalFund;
