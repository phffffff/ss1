import React, { Component } from 'react'
import ThreeSixty from 'react-360-view'

import dataCars from '../../api/arrayFeatures.json';
import dataWheels from '../../api/wheels.json'

export default class Cars extends Component {
	initCars = [
		...dataCars
	]

	state = {
		carCurrent: {
			...dataCars[0]
		}
	}

	handleOnClickChangeCar = (car) => {
		this.setState({
			// ...this.state // Nếu state có nhiều trường
			carCurrent: car
		})
	}

	renderCars = () => {
		return this.initCars.map((car) => {
			return (
				<div
					className="card text-right"
					style={{ cursor: 'pointer' }}
					onClick={() => { this.handleOnClickChangeCar(car) }}
					key={car.id}
				>
					<div className="card-body">
						<div className='row'>
							<div className='col col-2 d-flex'>
								<img
									className="card-img-top"
									src={car.img}
									alt={car.title}
									style={{
										objectFit: "contain",
										objectPosition: 'center'
									}}
								/>
							</div>
							<div className='col col-10'>
								<h4 className="card-title">{car.title}</h4>
								<p className="card-text">{car.title} is {car.type}</p>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}

	objectIsEmpty(ob) {
		return ob && Object.keys(ob).length === 0
			&& Object.getPrototypeOf(ob) === Object.prototype
	}

	renderTableCar(car) {
		return (
			<table className="table table-striped table-inverse table-responsive">
				<thead className="thead-inverse">
					<tr>
						<th>Title</th>
						<th>Color</th>
						<th>Price</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row">{car.title}</td>
						<td>{car.color}</td>
						<td>{car.price}</td>
						<td>{car.type}</td>
					</tr>
				</tbody>
			</table>
		)
	}
	// componentDidMount() {

	// 	const scriptAni360 = document.createElement('script')
	// 	scriptAni360.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js"

	// 	document.querySelector("#animation360").appendChild(scriptAni360);
	// }

	// componentDidUpdate() {

	// 	const divScriptAni360 = document.querySelector("#animation360");

	// 	const scriptAni360 = document.createElement('script')
	// 	scriptAni360.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6"

	// 	divScriptAni360.appendChild(scriptAni360);

	// }

	handleOnClickChangeWheel = (wheel) => {

		const { wheels } = !this.objectIsEmpty(this.state.carCurrent) && this.state.carCurrent;
		const newWheel = wheels.find((wheelOfCarCurrent) => {
			return wheelOfCarCurrent.idWheel === wheel.idWheel
		})
		this.setState({
			carCurrent: {
				...this.state.carCurrent,
				srcImg: newWheel.srcImg
			}
		})

	}

	renderWheels = (wheels) => {
		return (
			wheels && wheels.length &&
			wheels.map(wheel => {
				return (
					< div className="card" key={wheel.idWheel} onClick={() => { this.handleOnClickChangeWheel(wheel) }} style={{ cursor: 'pointer' }}>
						<div className="card-body">
							<div className='row'>
								<div className='col col-2'>
									<img className="card-img-top" src={wheel.img} alt={wheel.title} />
								</div>
								<div className='col col-10'>
									<b className="card-title">{wheel.title}</b>
									<p className="card-text">{wheel.price}</p>
								</div>
							</div>
						</ div>
					</div>
				)
			})
		)
	}

	render() {
		return (
			<div className='container'>
				<div className="row">
					<div className='col col-8'>
						<img
							className='mb-2'
							src={`./images/${this.state.carCurrent.srcImg}/civic-1.jpg`}
							style={{ width: '100%' }} />
						{
							!this.objectIsEmpty(this.state.carCurrent)
							&& this.renderTableCar(this.state.carCurrent)
						}
					</div>

					<div className='col col-4'>
						<span className='mb-3 d-block'>
							{this.renderCars()}
						</span>
						{this.renderWheels(dataWheels)}
					</div>
				</div >
			</div >
		)
	}
}
