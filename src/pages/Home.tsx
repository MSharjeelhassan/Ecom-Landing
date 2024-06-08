import axios from "axios";
import BAbutton from "../components/BAbutton";
import { useState } from "react";
// import BAcarousel from "../components/BAcarousel";
import { useNavigate } from "react-router-dom";
import BAring from "../components/BAring";

const Home = () => {
  
  
  const [productData, setproductData] = useState<any>([]);
  // const [productName, setProductName] = useState<any>("");
  const navigate = useNavigate();


  const getData = () => {
     return navigate('products')
  };

  axios
    .get("https://fakestoreapi.com/products?authuser=0")
    .then((res) => {
      let data = res.data;
      let cat=[...new Set(data.map((v:any)=>{return v.category}))];
      // console.log(cat);
let selectedProduct = cat.map((a:any)=>{
  let sel = data.filter((b:any)=>{return b.category===a})
  // console.log(sel);
  return sel[0]
})
console.log(selectedProduct);

setproductData(selectedProduct);
   
    })

    .catch((err: any) => {
      console.log(err, "this is the error");
    });

  return (
    <>
      <main>
        <div
          id="hero"
          className=""
          style={{
            backgroundImage: `url('hero-image.jpg')`,
            backgroundRepeat: "no-repeat",
            height: 450,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}>
        
          <div className="container h-100">
            <div className="row justify-content-start align-items-center">
              <div className="col-lg-3">
                <div className="text-white pt-5">
                  <h2>Beigh Hooded</h2>
                  <p>The best summer hooded wear for he/she</p>
                  <p>41.33 $</p>
                  <BAbutton btnValue={"Click to See More"} click={getData} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>

<BAring
 dataValue = {productData}
/>
          {/* <BAcarousel
          dataValue = {productData}
          /> */}
       
        </div>
      </main>
    </>
  );
};

export default Home;
