import React, { Component } from 'react'
import TestFashion from './TestFashion'
import data from '../../api/dataGlasses.json'

export default class Fashion extends Component {
    state = {
        currentGlass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }



    handleOnClickChangeGlass = (glass) => {
        this.setState({
            currentGlass: glass
        })
    }
    render() {
        const keyFrame = `@keyframes aniGlass{
            from {
                transform: rotate(-45deg);
                opacity: 0;
                width: 0px;
            }
            to {
                transform: rotate(0deg);
                opacity: 1;
                width: 150px;
            }
        }`

        const styleGlass = {
            animation: `aniGlass 1s`
        }
        return (
            <div style={{
                backgroundImage: ' url("./bg/fashion.jpg")',
                minHeight: "100vh",
            }}>
                <div>
                    {keyFrame}
                </div>
                <div style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    minHeight: 'inherit',
                    color: 'white'
                }}>
                    <div className='d-flex justify-content-center align-items-center mb-5'
                        style={{
                            minHeight: '100px',
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}>
                        <h2>THE GLASSES APP ONLINE</h2>
                    </div>
                    <div className='container'>
                        <div className='row justify-content-around'>
                            <TestFashion styleOffset='' flag data={this.state.currentGlass} ani={styleGlass.animation} />
                            <TestFashion styleOffset="" />
                        </div>

                        <div className='row justify-content-center mt-5 mb-2'>
                            <div className='col-6'>
                                <div className='row'>
                                    {
                                        data && data.length &&
                                        data.map((glass) => {
                                            return (
                                                <div className='col' key={glass.id}>
                                                    <button onClick={() => { this.handleOnClickChangeGlass(glass) }}>
                                                        <img src={glass.url} style={{
                                                            width: '100px'
                                                        }} />
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
