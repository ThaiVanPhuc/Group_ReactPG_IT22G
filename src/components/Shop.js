import classes from "./Shop.module.css";
import anh1 from "../img/box-Header/Hình 1.png";
import anh2 from "../img/box-Header/Hình 2.png";
import anh3 from "../img/box-Televisons/Tv-1.png";
import anh4 from "../img/box-Televisons/TV-2.png";
import anh5 from "../img/box-Televisons/Tv-3.png";
import anh6 from "../img/box-Televisons/Tv-4.png";
import anh7 from "../img/box-shop-by-brand/Group1/hinh1.png";
import anh8 from "../img/box-shop-by-brand/Group1/hinh2.png";
import anh9 from "../img/box-shop-by-brand/Group1/hinh3.png";
import anh10 from "../img/box-shop-by-brand/Group1/hinh4.png";
import anh11 from "../img/box-shop-by-brand/Group2/hinh1.png";
import anh12 from "../img/box-shop-by-brand/Group2/hinh2.png";
import anh13 from "../img/box-shop-by-brand/Group2/hinh3.png";
import anh14 from "../img/box-shop-by-brand/Group2/hinh4.png";
import anh15 from "../img/box-shop-by-brand/Group3/hinh1.png";
import anh16 from "../img/box-shop-by-brand/Group3/hinh2.png";
import anh17 from "../img/box-shop-by-brand/Group3/hinh3.png";
import anh18 from "../img/box-shop-by-brand/Group3/hinh4.png";
import anh19 from "../img/box-shop-by-brand/Group4/hinh1.png";
import anh20 from "../img/box-shop-by-brand/Group4/hinh2.png";
import anh21 from "../img/box-shop-by-brand/Group4/hinh3.png";
import anh22 from "../img/box-shop-by-brand/Group4/hinh4.png";
import anh23 from "../img/box-headphone-earphone/hinh1.png";
import anh24 from "../img/box-headphone-earphone/hinh2.png";
import anh25 from "../img/box-headphone-earphone/hinh3.png";
import anh26 from "../img/box-headphone-earphone/hinh4.png";
import anh27 from "../img/box-Acess/hinh1.png";
import anh28 from "../img/box-Acess/hinh2.png";
import anh29 from "../img/box-Acess/hinh3.png";
import anh30 from "../img/box-Acess/hinh4.png";


function Shop() {
  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <img src={anh1} alt="" className={classes.hinh1} />

        <div className={classes["home-button"]}>
          <div className={classes.hop1}></div>
          <div className={classes["home-homefill"]}>
            <img src={anh2} alt="" />
          </div>
        </div>

        <input type="text" placeholder="Search your item" className={classes["search-bar"]} />

        <div className={classes["user-icon"]}>
          <div className={classes.hop2}></div>
          <i className={`${classes["icon-ti-user"]} ${classes.user} ${classes.shadow_box}`}></i>
        </div>

        <div className={classes["cart-icon"]}>
          <div className={classes.hop3}></div>
          <i className={`${classes["icon-banhang"]} ${classes.shoppingcart} ${classes.shadow_box}`}></i>
          <div className={classes["cart-icon-no"]}>
            <div className={classes.box50}></div>
            <p>1</p>
          </div>
        </div>
      </div>

      <div className={classes.Categories}>
        <p className={classes["chu-categories"]}>Categories</p>
        <div className={classes.hinh5}></div>
      </div>


      <div className={classes["Categories-Section"]}>
        <div className={`${classes["gr-categories-section"]} ${classes.shadow_box}`}>
          <div className={classes.laptops}>
            <span>Laptops</span>
          </div>
          <div className={classes["hinh-categories-section"]}></div>
        </div>

        <div className={`${classes["gr-categories-section2"]} ${classes.shadow_box}`}>
          <div className={classes.camera}>
            <span>Camera</span>
          </div>
          <div className={classes["hinh-categories-section2"]}></div>
        </div>

        <div className={`${classes["gr-categories-section3"]} ${classes.shadow_box}`}>
          <div className={classes.Accesories}>
            <span>Accessories</span>
          </div>
          <div className={classes["hinh-categories-section3"]}></div>
        </div>

        <div className={`${classes["gr-categories-section4"]} ${classes.shadow_box}`}>
          <div className={classes.TV}>
            <span>TV</span>
          </div>
          <div className={classes["hinh-categories-section4"]}></div>
        </div>

        <div className={`${classes["gr-categories-section5"]} ${classes.shadow_box}`}>
          <div className={classes.Headphone}>
            <span>Headphone</span>
          </div>
          <div className={classes["gr-hinh5"]}>
            <div className={classes["hinh-categories-section5"]}></div>
          </div>
        </div>

        <div className={`${classes["gr-categories-section6"]} ${classes.shadow_box}`}>
          <div className={classes.storage}>
            <span>Storage</span>
          </div>
          <div className={classes["hinh-categories-section6"]}></div>
        </div>

        <div className={`${classes["gr-categories-section7"]} ${classes.shadow_box}`}>
          <div className={classes["home-theater"]}>
            <span>Home theater</span>
          </div>
          <div className={classes["hinh-categories-section7"]}></div>
        </div>
      </div>
      <div className={`${classes.banner} ${classes.shadow_box}`}>
        <div className={classes.noise}></div>
        <div className={classes["background-banner"]}></div>
        <div className={classes["next-button"]}></div>
        <div className={classes["text-frame"]}>
          <p1>LG GRAM I7 </p1>
          <p2>12th Gen Core i7 / Win11 / Microsoft 365 </p2>
          <p3>Starting at 499 $</p3>
        </div>
        <div className={classes["laptop-image"]}></div>
        <div className={classes["shop-button"]}>
          <span>SHOP NOW</span>
        </div>
        <div className={classes["shadow"]}></div>
      </div>

      <div className={classes["side-offer-product"]}>
        <div className={`${classes["new-product"]} ${classes["shadow_box_vip"]}`}>
          <div className={classes["frame49"]}>
            <span>New</span>
          </div>
          <div className={classes["product"]}>
            <div className={classes["Rectangle31"]}></div>
            <span>JBL Tour One </span>
            <div className={classes["hinh-new-product"]}></div>
          </div>
        </div>

        <div className={`${classes["offer-product"]} ${classes["shadow_box_vip"]}`}>
          <div className={classes["frame47"]}>
            <span>15% off</span>
          </div>
          <div className={classes["offer-frame"]}>
            <div className={classes["text-box"]}></div>
            <span>boAt Rockerz 255 </span>
            <div className={classes["hinh2-offer-product"]}></div>
          </div>
        </div>
      </div>

      <div className={classes["deal-btn"]}>
        <div className={classes["frame46"]}>
          <p>View All</p>
        </div>

        <div className={classes["frame50"]}>
          <div className={classes["gr-frame50"]}>
            <p>Today's Deal</p>
            <div className={classes["bx-frame50"]}></div>
          </div>
        </div>
      </div>

      <div className={classes["Today-deal"]}>
        <div className={classes["gr1-today-deal"]}>
          <div className={classes["gr1-1-today-deal"]}>
            <div className={classes["rectangle9"]}></div>
            <div className={classes["gr1-1-1-today-deal"]}>
              <div className={classes["rectangle39"]}></div>
            </div>
          </div>
          <div className={classes["hinh-gr1-today-deal"]}></div>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>399 $</p2>
          <p3>259 $</p3>
          <p4>Continue shopping...</p4>
        </div>

        <div className={classes["gr2-today-deal"]}>
          <div className={classes["hop-today-deal"]}></div>
          <div className={classes["hinh1-gr2-today-deal"]}></div>
          <div className={classes["gr2-1-today-deal"]}>
            <div className={classes["gr2-1-1-today-deal"]}></div>
            <div className={classes["hinh2-gr2-today-deal"]}></div>
          </div>
          <div className={classes["gr2-2-today-deal"]}>
            <div className={classes["gr2-2-1-today-deal"]}></div>
            <div className={classes["hinh3-gr2-today-deal"]}></div>
          </div>
          <div className={classes["gr2-3-today-deal"]}>
            <div className={classes["gr2-3-1-today-deal"]}></div>
            <div className={classes["hinh4-gr2-today-deal"]}></div>
          </div>
          <p1>Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens</p1>
          <p2>799 $</p2>
          <p3>599 $</p3>
        </div>


      </div>
      <div className={classes["Today-deal"]}>
        <div className={classes["gr4-today-deal"]}>
          <div className={classes["hop3-today-deal"]}></div>
          <div className={classes["hinh1-gr4-today-deal"]}></div>
          <div className={classes["gr4-1-today-deal"]}>
            <div className={classes["gr4-1-1-today-deal"]}></div>
            <div className={classes["hinh2-gr4-today-deal"]}></div>
          </div>
          <div className={classes["gr4-2-today-deal"]}>
            <div className={classes["gr4-2-1-today-deal"]}></div>
            <div className={classes["hinh3-gr4-today-deal"]}></div>
          </div>
          <div className={classes["gr4-3-today-deal"]}>
            <div className={classes["gr4-3-1-today-deal"]}></div>
            <div className={classes["hinh4-gr4-today-deal"]}></div>
          </div>
          <p1>Lenovo Legion 5 11th Gen Intel Core i7 15.6"(39.62cm) FHD IPS Gaming Laptop</p1>
          <p2>799 $</p2>
          <p3>599 $</p3>
        </div>
      </div>

      <div className={classes["related-item-btn"]}>
        <div className={classes["frame46"]}>
          <p>View All</p>
        </div>

        <div className={classes["frame50"]}>
          <div className={classes["gr-frame50"]}>
            <p>Your Related items ..</p>
            <div className={classes["bx-frame50"]}></div>
          </div>
        </div>
      </div>
      <div className={classes["Related-items"]}>
        <div className={classes["gr1-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>559 $</p2>
          <div className={`${classes["hinh1-related-items"]} ${classes["shadow_box"]}`}></div>
          <div className={classes["background-related-items"]}></div>
        </div>

        <div className={classes["gr2-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>59 $</p2>
          <div className={`${classes["hinh2-related-items"]} ${classes["shadow_box"]}`}></div>
          <div className={classes["background-related-items"]}></div>
        </div>

        <div className={classes["gr3-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>12 $</p2>
          <div className={`${classes["hinh3-related-items"]} ${classes["shadow_box"]}`}></div>
          <div className={classes["background-related-items"]}></div>
        </div>

        <div className={classes["gr4-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>159 $</p2>
          <div className={`${classes["hinh4-related-items"]} ${classes["shadow_box"]}`}></div>
          <div className={classes["background-related-items"]}></div>
        </div>
      </div>

      <div className={classes["tv-btn"]}>
        <div className={classes["frame46"]}>
          <p>View All</p>
        </div>

        <div className={classes["frame50"]}>
          <div className={classes["gr-frame50"]}>
            <p>Your Related items ..</p>
            <div className={classes["bx-frame50"]}></div>
          </div>
        </div>
      </div>
      <div className={classes["Televisions"]}>
        <div className={classes["gr1-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>559 $</p2>
          <img src={anh3} alt="" className={`${classes["hinh1-related-items"]} ${classes["shadow_box"]}`} />
          <div className={classes["background-related-items"]}></div>
        </div>

        <div className={classes["gr2-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>59 $</p2>
          <img src={anh4} alt="" className={`${classes["hinh2-related-items"]} ${classes["shadow_box"]}`} />
          <div className={classes["background-related-items"]}></div>
        </div>

        <div className={classes["gr3-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>259 $</p2>
          <img src={anh5} alt="" className={`${classes["hinh3-related-items"]} ${classes["shadow_box"]}`} />
          <div className={classes["background-related-items"]}></div>
        </div>

        <div className={classes["gr4-Related-items"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>159 $</p2>
          <img src={anh6} alt="" className={`${classes["hinh4-related-items"]} ${classes["shadow_box"]}`} />
          <div className={classes["background-related-items"]}></div>
        </div>
      </div>

      <div className={classes["brand-btn"]}>
        <div className={classes["frame50"]}>
          <div className={classes["gr-frame50"]}>
            <p>Shop by Brands</p>
            <div className={classes["bx-frame50"]}></div>
          </div>
        </div>
      </div>
      <div className={classes["shop-by-brand"]}>
        <div className={classes["group1-shopbybrand"]}>
          <div className={`${classes["background1-gr1-shopbybrand"]} ${classes["hopbackground"]}`}>
            <div className={classes["hopbackground"]}></div>
          </div>
          <p>Music</p>

          <div className={classes["group1-1shopbybrand"]}>
            <div className={`${classes["gr1-1-1-shopbybrand"]} ${classes["hopgr1-shopbybrand"]}`}>
              <div className={classes["hopgr1-shopbybrand"]}></div>
            </div>
            <img src={anh7} alt="" className={`${classes["hinhgr1-shopbybrand"]} ${classes["shadow_box"]}`} />
          </div>

          <div className={classes["group1-2shopbybrand"]}>
            <div className={`${classes["gr1-2-1-shopbybrand"]} ${classes["hopgr2-shopbybrand"]}`}>
              <div className={classes["hopgr2-shopbybrand"]}></div>
            </div>
            <img src={anh8} alt="" className={`${classes["hinh2gr1-shopbybrand"]} ${classes["shadow_box"]}`} />
          </div>

          <div className={classes["group1-3shopbybrand"]}>
            <div className={`${classes["gr1-3-1-shopbybrand"]} ${classes["hopgr3-shopbybrand"]}`}>
              <div className={classes["hopgr3-shopbybrand"]}></div>
            </div>
            <img src={anh9} alt="" className={`${classes["hinh3gr1-shopbybrand"]} ${classes["shadow_box"]}`} />
          </div>

          <div className={classes["group1-4shopbybrand"]}>
            <div className={`${classes["gr1-4-1-shopbybrand"]} ${classes["hopgr4-shopbybrand"]}`}>
              <div className={classes["hopgr4-shopbybrand"]}></div>
            </div>
            <img src={anh10} alt="" className={`${classes["hinh4gr1-shopbybrand"]} ${classes["shadow_box"]}`} />
          </div>
        </div>
        <div className={classes["shop-by-brand"]}>
          {/* Group 2 */}
          <div className={classes["group2-shopbybrand"]}>
            <div className={`${classes["background1-gr1-shopbybrand"]} ${classes["hopbackground"]}`}>
              <div className={classes["hopbackground"]}></div>
            </div>
            <p>Storage</p>

            <div className={classes["group1-1shopbybrand"]}>
              <div className={`${classes["gr1-1-1-shopbybrand"]} ${classes["hopgr1-shopbybrand"]}`}>
                <div className={classes["hopgr1-shopbybrand"]}></div>
              </div>
              <img
                style={{ width: "67.96px", height: "82.28px", bottom: "40px" }}
                src={anh11}
                alt=""
                className={`${classes["hinhgr1-shopbybrand"]} ${classes["shadow_box"]}`}
              />
            </div>

            <div className={classes["group1-2shopbybrand"]}>
              <div className={`${classes["gr1-2-1-shopbybrand"]} ${classes["hopgr2-shopbybrand"]}`}>
                <div className={classes["hopgr2-shopbybrand"]}></div>
              </div>
              <img
                style={{ width: "85.67px", height: "51.41px", top: "-5px" }}
                src={anh12}
                alt=""
                className={`${classes["hinh2gr1-shopbybrand"]} ${classes["shadow_box"]}`}
              />
            </div>

            <div className={classes["group1-3shopbybrand"]}>
              <div className={`${classes["gr1-3-1-shopbybrand"]} ${classes["hopgr3-shopbybrand"]}`}>
                <div className={classes["hopgr3-shopbybrand"]}></div>
              </div>
              <img
                style={{ width: "104.29px", height: "21.89px", left: "0px", top: "40px" }}
                src={anh13}
                alt=""
                className={`${classes["hinh3gr1-shopbybrand"]} ${classes["shadow_box"]}`}
              />
            </div>

            <div className={classes["group1-4shopbybrand"]}>
              <div className={`${classes["gr1-4-1-shopbybrand"]} ${classes["hopgr4-shopbybrand"]}`}>
                <div className={classes["hopgr4-shopbybrand"]}></div>
              </div>
              <img
                style={{ width: "80px", height: "15.94px", top: "44px" }}
                src={anh14}
                alt=""
                className={`${classes["hinh4gr1-shopbybrand"]} ${classes["shadow_box"]}`}
              />
            </div>
          </div>

          {/* Group 3 */}
          <div className={classes["group3-shopbybrand"]}>
            <div className={`${classes["background1-gr1-shopbybrand"]} ${classes["hopbackground"]}`}>
              <div className={classes["hopbackground"]}></div>
            </div>
            <p>Laptops</p>

            <div className={classes["group1-1shopbybrand"]}>
              <div className={`${classes["gr1-1-1-shopbybrand"]} ${classes["hopgr1-shopbybrand"]}`}>
                <div className={classes["hopgr1-shopbybrand"]}></div>
              </div>
              <img
                style={{ width: "64.18px", height: "64.18px", bottom: "56px", right: "93px" }}
                src={anh15}
                alt=""
                className={`${classes["hinhgr1-shopbybrand"]} ${classes["shadow_box"]}`}
              />
            </div>
          </div><div className={classes["group1-2shopbybrand"]}>
            <div className={`${classes["gr1-2-1-shopbybrand"]} ${classes["hopgr2-shopbybrand"]}`}>
              <div className={classes["hopgr2-shopbybrand"]}></div>
            </div>
            <img
              style={{ width: "50px", height: "50px", left: "88px", top: "-1px" }}
              src={anh16}
              alt=""
              className={`${classes["hinh2gr1-shopbybrand"]} ${classes["shadow_box"]}`}
            />
          </div>

          <div className={classes["group1-3shopbybrand"]}>
            <div className={`${classes["gr1-3-1-shopbybrand"]} ${classes["hopgr3-shopbybrand"]}`}>
              <div className={classes["hopgr3-shopbybrand"]}></div>
            </div>
            <img
              style={{ width: "88px", height: "29.33px", left: "12px", top: "42px" }}
              src={anh17}
              alt=""
              className={`${classes["hinh3gr1-shopbybrand"]} ${classes["shadow_box"]}`}
            />
          </div>

          <div className={classes["group1-4shopbybrand"]}>
            <div className={`${classes["gr1-4-1-shopbybrand"]} ${classes["hopgr4-shopbybrand"]}`}>
              <div className={classes["hopgr4-shopbybrand"]}></div>
            </div>
            <img
              style={{ width: "83px", height: "60px", left: "14px", top: "26px" }}
              src={anh18}
              alt=""
              className={`${classes["hinh4gr1-shopbybrand"]} ${classes["shadow_box"]}`}
            />
          </div>
        </div>

// Group 4
        <div className={classes["group4-shopbybrand"]}>
          <div className={`${classes["background1-gr1-shopbybrand"]} ${classes["hopbackground"]}`}>
            <div className={classes["hopbackground"]}></div>
          </div>
          <p>Televisions</p>

          <div className={classes["group1-1shopbybrand"]}>
            <div className={`${classes["gr1-1-1-shopbybrand"]} ${classes["hopgr1-shopbybrand"]}`}>
              <div className={classes["hopgr1-shopbybrand"]}></div>
            </div>
            <img
              style={{ width: "68px", height: "12.4px", left: "-46px", top: "20px" }}
              src={anh19}
              alt=""
              className={`${classes["hinhgr1-shopbybrand"]} ${classes["shadow_box"]}`}
            />
          </div>

          <div className={classes["group1-2shopbybrand"]}>
            <div className={`${classes["gr1-2-1-shopbybrand"]} ${classes["hopgr2-shopbybrand"]}`}>
              <div className={classes["hopgr2-shopbybrand"]}></div>
            </div>
            <img
              style={{ width: "50px", height: "50px", left: "88px", top: "-1px" }}
              src={anh20}
              alt=""
              className={`${classes["hinh2gr1-shopbybrand"]} ${classes["shadow_box"]}`}
            />
          </div>

          <div className={classes["group1-3shopbybrand"]}>
            <div className={`${classes["gr1-3-1-shopbybrand"]} ${classes["hopgr3-shopbybrand"]}`}>
              <div className={classes["hopgr3-shopbybrand"]}></div>
            </div>
            <img
              style={{ width: "105.34px", height: "51.31px", left: "2px" }}
              src={anh21}
              alt=""
              className={`${classes["hinh3gr1-shopbybrand"]} ${classes["shadow_box"]}`}
            />
          </div>
        </div>
        <div className={classes["group1-4shopbybrand"]}>
          <div className={`${classes["gr1-4-1-shopbybrand"]} ${classes["hopgr4-shopbybrand"]}`}>
            <div className={classes["hopgr4-shopbybrand"]}></div>
          </div>
          <img
            style={{ width: "62.56px", height: "21.73px", top: "45px", left: "25px" }}
            src={anh22}
            alt=""
            className={`${classes["hinh4gr1-shopbybrand"]} ${classes["shadow_box"]}`}
          />
        </div>
      </div>
      // Continue with the headphone-earphone section
      <div className={classes["headphone-btn"]}>
        <div className={classes["frame46"]}>
          <p>View All</p>
        </div>
        <div className={classes["frame50"]}>
          <div className={`${classes["gr-frame50"]} ${classes["bx-frame50"]}`}>
            <p>Headphones</p>
            <div className={classes["bx-frame50"]}></div>
          </div>
        </div>
      </div>
      {/* End box "headphone-btn" */}

      {/* Start box "headphone-earphone" */}
      <div className={classes["headphone-earphone"]}>
        {/* Continue with individual headphone-earphone items */}
        <div className={classes["gr1-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>559 $</p2>
          <img src={anh23} alt="" className={`${classes["hinh1-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
        <div className={classes["gr2-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>59 $</p2>
          <img src={anh24} alt="" className={`${classes["hinh2-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
        <div className={classes["gr3-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>259 $</p2>
          <img src={anh25} alt="" className={`${classes["hinh3-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
        <div className={classes["gr4-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>159 $</p2>
          <img src={anh26} alt="" className={`${classes["hinh4-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
      </div>
      {/* End box "headphone-earphone" */}
      // Continue with the Acessories-btn section
      <div className={classes["Acessories-btn"]}>
        <div className={classes["frame46"]}>
          <p>View All</p>
        </div>
        <div className={classes["frame50"]}>
          <div className={`${classes["gr-frame50"]} ${classes["bx-frame50"]}`}>
            <p>Accessories</p>
            <div className={classes["bx-frame50"]}></div>
          </div>
        </div>
      </div>
      {/* End box "Acessories-btn" */}

      {/* Start box "Acess" */}
      <div className={classes["Acess"]}>
        {/* Continue with individual Acess items */}
        <div className={classes["gr1-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>559 $</p2>
          <img src={anh27} alt="" className={`${classes["hinh1-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
        <div className={classes["gr2-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>59 $</p2>
          <img src={anh28} alt="" className={`${classes["hinh2-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
        <div className={classes["gr3-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>259 $</p2>
          <img src={anh29} alt="" className={`${classes["hinh3-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
        <div className={classes["gr4-headphone-earphone"]}>
          <p1>Zebronics ZEB-JUKE BAR DOLBY ATMOS Home Theater With Subwoofer</p1>
          <p2>159 $</p2>
          <img src={anh30} alt="" className={`${classes["hinh4-headphone-earphone"]} ${classes["shadow_box"]}`} />
        </div>
      </div>
      {/* End box "Acess" */}
      {/* Start box "Frame48" */}
      <div className={classes["Frame48"]}>
        <div className={classes["bottom-banner"]}>
          {/* Bottom banner 1 */}
          <div className={classes["bottom-banner1"]}>
            <div className={classes["gr2-bottom-banner1"]}>
              <div className={classes["hop-bottom-banner1"]}></div>
              <div className={classes["bx-bottom-banner1"]}></div>
              <div className={classes["eclipse1"]}></div>
            </div>
            <img src="./assets/img/box-Frame48/hinh1.png" alt="" className={classes["hinh1-frame48"]} />
            <div className={classes["gr1-bottom-banner1"]}>
              <p1>
                at Just <a style={{ color: "green", lineHeight: "36px", marginTop: "6px", marginLeft: "6px" }}>39$</a>
              </p1>
              <p2>Wired On Ear Headphones with Mic </p2>
              <p3>boAt Bassheads 900</p3>
              <p4>SHOP NOW</p4>
            </div>
          </div>

          {/* Bottom banner 2 */}
          <div className={classes["bottom-banner2"]}>
            <div className={classes["hop-bottom-banner2"]}></div>
            <p>
              From ₹3095.00/mo. Per Month <br />
              with EMI,<br />
              or <br />
              MRP $239<a style={{ color: "burlywood", lineHeight: "30px" }}>.00</a>
            </p>
            <p2>(Incl. of all taxes)</p2>
            <p1>AirPods Pro</p1>
            <img src="./assets/img/box-Frame48/hinh2.png" alt="" className={classes["hinh2-frame48"]} />
          </div>
        </div>
      </div>
      {/* End box "Frame48" */}
      {/* Start box "Footer" */}
      <div className={classes["Footer"]}>
        <div className={classes["hop-footer"]}></div>
        <p1>
          <a style={{ color: "rgb(113, 113, 234)" }}>Elec</a>xo
        </p1>
        <p2>
          Mail Us <a style={{ color: "rgb(86, 82, 82)" }}>elexo@info.com elexoind a@info.in</a>
        </p2>
        <p3>
          Contact us
          <br />
          <a style={{ color: "rgb(86, 82, 82)" }}>
            B-11 D.S.I.D.C Complex,F.I.Epatparganj Industrial Area, New Delhi, Delhi110092 , 011 4242 0976
          </a>
        </p3>
        <div className={classes["gr-footer"]}>
          {/* Footer group 1 */}
          <div className={classes["gr1-footer"]}>
            <p1>Know us</p1>
            <p>About us</p>
            <p>Contact us</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Elexo Earn</p>
          </div>

          {/* Footer group 2 */}
          <div className={classes["gr1-footer"]}>
            <p1>Policy</p1>
            <p>Security</p>
            <p>Privacy</p>
            <p>Team of use</p>
            <p>Return policy</p>
            <p>Compliance</p>
          </div>

          {/* Footer group 3 */}
          <div className={classes["gr1-footer"]}>
            <p1>Help you</p1>
            <p>Return & Cancellation</p>
            <p>Membership</p>
            <p>Payments</p>
            <p>Account</p>
            <p>Shipping</p>
          </div>

          {/* Footer group 4 */}
          <div className={classes["gr1-footer"]}>
            <p1>Social</p1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
        <div className={classes["line"]}></div>
        {/* End box "Footer" */}
      </div>

    </div >
  );
};

export default Shop;
