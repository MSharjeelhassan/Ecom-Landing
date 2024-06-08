import AdjustIcon from "@mui/icons-material/Adjust";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <>
      <div
        className=" mt-5"
        style={{
          //height: "300px",
          backgroundImage: "linear-gradient(to right, #1f4037 , #99f2c8)",
          color: "white",
        }}
      >
        <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-2">
              <div className="h4">
                <span className="pe-3">
                  <AdjustIcon color="secondary" />
                </span>{" "}
                About
              </div>
              <div>
                {" "}
                <span className="pe-3">
                  <FmdGoodIcon />
                </span>{" "}
                <p
                  className="px-2 d-inline
                "
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam, voluptates?{" "}
                </p>
              </div>
              <div>
                <span className="pe-3">
                  <PhoneIcon />
                </span>{" "}
                +146464646
              </div>
              <div>
                <span className="pe-3">
                  <SendIcon />
                </span>
                info@wewedss.com
              </div>
              <input type="text" />
              <span>
                <SendIcon />
              </span>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
