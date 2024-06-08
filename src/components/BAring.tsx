import { Link } from "react-router-dom";

export default function BAring(props: any) {
  const { dataValue } = props;

  return (
    <>
      <h1 className="text-center my-3">Category</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-lg-3">
            {/* style={{height:'80px',width:'80px',borderRadius:'40px'}} */}
            <div className=" d-flex align-items-center justify-content-center gap-5">
              {dataValue.map((v: any, i: any) => {
                return (
                  <>
                  <div key={i}>
                    <img className="img-fluid" src={v.image} alt="" />
                    <Link to='products' className="text-black">{v.category}</Link>

                  </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
