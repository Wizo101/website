import "./home.scss"

const home = () => {
    return (
        <div className="bg">
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">WideScope</h1>
                    <p className="lead">Description</p>
                    <hr className="my-4" />
                    <p>Inquire</p> 
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="/price-estimator" role="button">Price Estimator</a>
                    </p>
                </div>
            </div>
        </div>

        

    )
}

export default home
