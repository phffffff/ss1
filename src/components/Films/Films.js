import React, { Component } from 'react';

import './Films.scss';

import HeaderFilm from './HeaderFilm/HeaderFilm';
import dataFilm from '../../api/DataFilms.json';

export default class Films extends Component {

    state = {
        dataFilm
    }

    renderFilm = () => {
        const Films = this.state.dataFilm;
        return (
            Films && Films.length && (
                Films.map(film => {
                    return (
                        <div className='col col-3' key={film.maPhim}>
                            <div className="card text-left" style={{
                                height: '660px',
                                minHeight: '660px',
                                overflow: 'hidden'
                            }}>
                                <div className='' style={{
                                    height: '380px',
                                }}>
                                    <img className="card-img-top" src={film.hinhAnh} alt={film.tenPhim}
                                        style={{
                                            height: '100%',
                                            objectFit: 'cover',
                                        }} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{
                                        height: '50px',
                                    }}
                                    >{film.tenPhim}</h5>
                                    {film.moTa.length > 120 ? <p className="card-text">{film.moTa.substring(0, 80) + '...'}</p> : film.moTa}
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        )
    }
    render() {
        return (
            <div className='w-100 film-bg'>
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    height: '100%'
                }}>
                    <HeaderFilm />
                    <div className='container mt-5 pb-5'>
                        <div className="row gy-3">
                            {this.renderFilm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
