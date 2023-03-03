import { Text, Image } from "@chakra-ui/react";

import React from "react";
import styles from "./footer.module.css";

// import { FaInstagram, FaTwitter } from "react-icons/fa";
// import { BsFacebook, BsPinterest } from "react-icons/Bs";
// import { AiFillTwitterCircle } from "react-icons/Ai";
const Footer = () => {
  return (
    <>
      {/* container *************** */}
      <div className={styles.container}>
        {/* container box one */}
        <div className={styles.box_one}>
          <div>
            <Text fontSize="15px" color="#84c225">
              Big Basket
            </Text>
            <Text fontSize="15px" color="#808080">
              About Us
            </Text>
            <Text fontSize="15px" color="#808080">
              In News
            </Text>
            <Text fontSize="15px" color="#808080">
              Green BigBasket
            </Text>
            <Text fontSize="15px" color="#808080">
              Privacy Policy
            </Text>
            <Text fontSize="15px" color="#808080">
              Affiliate
            </Text>
            <Text fontSize="15px" color="#808080">
              Terms and Conditions
            </Text>
            <Text fontSize="15px" color="#808080">
              Career at BigBasket
            </Text>
            <Text fontSize="15px" color="#808080">
              bb Instant
            </Text>
            <Text fontSize="15px" color="#808080">
              bb Daily
            </Text>
            <Text fontSize="15px" color="#808080">
              bb Blog
            </Text>
            <Text fontSize="15px" color="#808080">
              bb now
            </Text>
          </div>
          <div>
            <Text color="#84c225">Help</Text>
            <Text fontSize="15px" color="#808080">
              FAQs
            </Text>
            <Text fontSize="15px" color="#808080">
              Contact Us
            </Text>
            <Text fontSize="15px" color="#808080">
              bb Wallet FAQs
            </Text>
            <Text fontSize="15px" color="#808080">
              bb Wallet T&Cs
            </Text>
            <Text fontSize="15px" color="#808080">
              Vendor Connect
            </Text>
          </div>
          <div>
            <Text fontSize="15px" color="#84c225">
              Download Our App
            </Text>
            <Image
              src="https://www.bbassets.com/static/v2627/custPage/build/content/img/Google-App-store-icon.png"
              alt="googlePlay"
            />
            <Image
              src="https://www.bbassets.com/static/v2627/custPage/build/content/img/Apple-App-store-icon.png"
              alt="AppStore"
            />
          </div>
          <div>
            <Text fontSize="15px" color="#84c225">
              Get Social With Us
            </Text>
            <div className={styles.socialHandles}>
              {/* <BsFacebook size="40px" color="#28388a" />
              <BsPinterest size="40px" color="#db1818" />
              <AiFillTwitterCircle size="40px" color="#18aedb" />
              <FaInstagram size="40px" color="red" /> */}
            </div>
          </div>
        </div>
        {/* container box two  */}
        <div className={styles.box_two}>
          <div className={styles.box_two_text}>
            <Text fontSize="14px" color="#84c225" w="20%">
              POPULAR CATEGORIES:
            </Text>
            <Text fontSize="14px" color="#808080" w="80%">
              Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes,
              Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy
              Vegetables, Frozen Veg Food, Diapers & Wipes,
            </Text>
          </div>
          <div className={styles.box_two_text}>
            <Text fontSize="14px" color="#84c225" w="20%">
              POPULAR BRANDS:
            </Text>
            <Text fontSize="14px" color="#808080" w="80%">
              Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez,
              Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero,
              Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk,
              Pedigree,
            </Text>
          </div>
          <div className={styles.box_two_text}>
            <Text fontSize="14px" color="#84c225" w="20%">
              CITIES WE SERVE:
            </Text>
            <Text fontSize="14px" color="#808080" w="80%">
              Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore,
              Madurai, Coimbatore, Vijayawada-Guntur, Kolkata,
              Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon,
              Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh
              Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District,
              Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere,
              Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad,
              Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural,
              Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural,
              Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram
              Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural,
              Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural,
              Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra,
              Kozhikode,{" "}
            </Text>
          </div>
          <div className={styles.box_two_text}>
            <Text fontSize="14px" color="#84c225" w="20%">
              PAYMENT OPTIONS:
            </Text>
            <Image
              style={{ width: "300px" }}
              src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* copyright ************** */}
      <div className={styles.copyright}>
        <Text fontSize="12px" color="#808080">
          Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd
        </Text>
      </div>
    </>
  );
};

export default Footer;
