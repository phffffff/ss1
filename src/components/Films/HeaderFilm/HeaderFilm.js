function HeaderFilm() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark" style={{
            backgroundColor: 'rgba(0,0,0,0)',
        }}>
            <div className='container'>
                <a className="navbar-brand text-light" href="#">Films</a>
                <button className="navbar-toggler d-lg-none text-light" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">List</a>
                        </li>
                    </ul>
                    <form className="d-flex justify-content-between my-2 my-lg-0">
                        <input className="form-control mr-sm-2 me-2" type="text" placeholder="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default HeaderFilm;