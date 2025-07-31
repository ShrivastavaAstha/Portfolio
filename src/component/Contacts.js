import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contacts = () => {
  return (
    <>
      <div>
        <div className="contact">
          <h1
            className="underline"
            style={{ color: "white", paddingLeft: "20px" }}
          >
            Contact
          </h1>
        </div>
        {/* <h3 style={{ color: "white", paddingLeft: "15px" }}>
          Do contact me by filling your details or contacting me .
        </h3>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <button
          style={{
            marginLeft: "10px",
            padding: "8px",
            width: "250px",
          }}
        >
          Submit
        </button>
        <br /> */}
        <br />
        <h3 style={{ color: "white", paddingLeft: "15px" }}>
          You can contact me through:
        </h3>
        <div className="socialcontact">
          <h3>
            <WhatsAppIcon
              style={{
                color: "#fb0c87",
                marginLeft: "10px",
                marginBottom: "-12px",
                fontSize: "40px",
              }}
            />
            <span
              style={{
                color: "#fb0c87",
                paddingLeft: "10px",
                marginBottom: "100px",
              }}
            >
              9852403024
            </span>
          </h3>
          <h3>
            <MailOutlineIcon
              style={{
                color: "#fb0c87",
                marginLeft: "10px",
                marginBottom: "-12px",
                fontSize: "40px",
              }}
            />
            <span
              style={{
                color: "#fb0c87",
                paddingLeft: "10px",
                marginBottom: "100px",
              }}
            >
              astha2333@gmail.com
            </span>
          </h3>
          <h3>
            <TelegramIcon
              style={{
                color: "#fb0c87",
                marginLeft: "10px",
                marginBottom: "-12px",
                fontSize: "40px",
              }}
            />
            <span
              style={{
                color: "#fb0c87",
                paddingLeft: "10px",
                marginBottom: "100px",
              }}
            >
              @Astha_Shrivastava
            </span>
          </h3>
          <h3>
            <LinkedInIcon
              style={{
                color: "#fb0c87",
                marginLeft: "10px",
                marginBottom: "-12px",
                fontSize: "40px",
              }}
            />
            <span
              style={{
                color: "#fb0c87",
                paddingLeft: "10px",
                marginBottom: "100px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/astha-srivastava-61b27a257"
                style={{
                  color: "#fb0c87",
                  paddingLeft: "10px",
                  marginBottom: "100px",
                }}
              >
                Astha.
              </a>
            </span>
          </h3>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
export default Contacts;
