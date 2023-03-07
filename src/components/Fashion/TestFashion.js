import React, { Component } from 'react'

import './TestFashion.scss'

export default class TestFashion extends Component {


    render() {
        const ani = this.props.ani;
        console.log(ani)
        return (


            <div className={"card position-relative col col-3 " + this.props.colOffset}>
                <img
                    className="card-img-top"
                    src="./glassesImage/model.jpg" alt=""
                    style={{
                    }}
                />
                {this.props.flag &&
                    <>
                        <div className='position-absolute style-glasses'>
                            <img src={this.props.data.url}
                                style={{
                                    width: "100%",
                                    animation: ani,
                                }} />
                        </div>
                        <div className="card-body" style={{
                            color: 'red'
                        }}>
                            <h6 className="" >{this.props.data.name}</h6>
                            <p className="">{this.props.data.price}</p>
                        </div>
                    </>
                }

            </div>
        )
    }
}
