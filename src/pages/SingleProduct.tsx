import {  useLocation, useParams } from "react-router-dom"

export default function SingleProduct() {
    const params = useParams();
    console.log(params);

    const location = useLocation();
    console.log(location.pathname);
    


  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
