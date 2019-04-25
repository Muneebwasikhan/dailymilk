/*eslint-disable*/

import React, { Component } from 'react'
import './Dashboard.css'
import logo from '../../Assets/img/logo_black_3.png';
import img1 from '../../Assets/img/playstore.png';
import img2 from '../../Assets/img/istore.png';
import img3 from '../../Assets/img/mobile-mockup.png';
import img4 from '../../Assets/img/icons/wallet.png';
import img5 from '../../Assets/img/icons/schedule.png';
import img6 from '../../Assets/img/icons/delivery-2.png';
import img7 from '../../Assets/img/icons/milk.png';
import img8 from '../../Assets/img/icons/breads.png';
import img9 from '../../Assets/img/icons/eggs.png';
import img10 from '../../Assets/img/icons/fruits.png';
import img12 from '../../Assets/img/icons/vegetables.png';
import img13 from '../../Assets/img/icons/non-veg.png';
import img14 from '../../Assets/img/icons/grocery.png';
import img15 from '../../Assets/img/icons/household.png';
import img16 from '../../Assets/img/icons/juice.png';
import img17 from '../../Assets/img/icons/packaged-foods.png';
import img18 from '../../Assets/img/icons/personal-care.png';
import img19 from '../../Assets/img/icons/baby-care.png';
import img20 from '../../Assets/img/icons/pooja-needs.png';
import img21 from '../../Assets/img/icons/medicines.png';
import img22 from '../../Assets/img/mockup-1.png';
import img23 from '../../Assets/img/mockup-2.png';
import img24 from '../../Assets/img/mockup-3.png';
import img25 from '../../Assets/img/icons/quote.svg';
import img26 from '../../Assets/img/playstore.png';
import img27 from '../../Assets/img/istore.png';
import img28 from '../../Assets/img/logo/ys-logo.png';
import img29 from '../../Assets/img/logo/et-tech-logo.png';
import img30 from '../../Assets/img/logo/know-startup-logo.png';
import img31 from '../../Assets/img/logo/vccircle-logo.png';
import img32 from '../../Assets/img/logo/iamwire-logo.png';
import img33 from '../../Assets/img/logo/inc42-logo.png';
import img34 from '../../Assets/img/logo/digifire-logo.png';

class Dashboard extends Component {
 
  render() {
   
    return (
     <div>
         {/* <!-- Navigation --> */}
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container topnav">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<i class="fa fa-bars"></i>
			</button>
                <a href="http://dailyninja.in/" class="navbar-brand topnav" href="/"> <img src={logo} alt="DailyNinja logo" /></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a class="page-scroll" href="#hiw">How it works?</a></li>
                    <li><a class="page-scroll" href="#testimonials">Testimonials</a></li>
                    <li><a class="page-scroll" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="bg-background">
        <div class="intro-head text-left">
            <div class="container">
                <div class="__top-section">
                    <h4> Delivering Freshness Daily </h4>
                    <h1> Milk & <span id="typed"></span> </h1>
                    <div class="col-lg-7 col-md-6 col-sm-12 no-padding">
                        <p> DailyNinja delivers your daily needs right at your doorstep. Subscribe Milk, Bread n Eggs, Fruits & Veggies and much more based on your needs.</p>
                        <div class="download-icons mar-t-40">
                            <a href="https://play.google.com/store/apps/details?id=com.dailyninjadev&hl=en"> <img src={img1} alt="Download DailyNinja Android app" /> </a>
                            <a href="https://itunes.apple.com/in/app/dailyninja/id1049315042?mt=8"> <img src={img2} alt="Download DailyNinja iOS app" /> </a>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="mockup-img">
                        <img src={img3} class="img-responsive" alt="DailyNinja Mobile mockup" />
                    </div>
                    <div class="bg-bottom"> </div>
                    {/* <!-- <a href="#about" class="btn-circle page-scroll"><i class="fa fa-angle-double-down animated"></i></a> --> */}
                </div>
            </div>
        </div>
    </div>
    <section class="feature-box pad-75">
        <div class="main-container">
            <div class="col-md-4">
                <div class="feature">
                    <div class="__img"> <img src={img4} /> </div>
                    <div class="__name"> Recharge your wallet</div>
                    <p>Recharge your online pre-paid wallet through Credit card, Debit card, e-wallet, Net banking and UPI. You can even request for cash collection.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature">
                    <div class="__img"> <img src={img5} /> </div>
                    <div class="__name"> Place your order</div>
                    <p> No hassle of placing orders daily, plan your week or month in advance by subscribing daily, alternatively or frequency based deliveries.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature">
                    <div class="__img"> <img src={img6} /> </div>
                    <div class="__name"> Get it delivered by 7 AM </div>
                    <p> We deliver all your items before 7 AM in the morning. Change the quantity or pause all deliveries for your vacation duration.</p>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </section>
    <section class="pad-75 bg-white text-center">
        <div class="container">
            <div class="section-title text-center">
                <h4>Get every thing delivered with Milk every morning</h4>
                <h2>Wide range of Available Products</h2>
            </div>
            <ul class="product-categories">
                <li> <img src={img7} alt="Online Milk Delivery" />
                    <h5> Milk & Dairy </h5>
                </li>
                <li> <img src={img8} alt="Breads" />
                    <h5> Breads</h5>
                </li>
                <li> <img src={img9} alt="Eggsy" />
                    <h5> Eggs</h5>
                </li>
                <li> <img src={img10} alt="Fruits" />
                    <h5> Fruits </h5>
                </li>
                <li> <img src={img12} alt="Vegetables" />
                    <h5> Vegetables </h5>
                </li>
                <li> <img src={img13} alt="Non-veg " />
                    <h5> Non-veg </h5>
                </li>
                <li> <img src={img14} alt="Grocery" />
                    <h5> Grocery </h5>
                </li>
                <li> <img src={img15} alt="Household" />
                    <h5>Household </h5>
                </li>
                <li> <img src={img16} alt="Beverage" />
                    <h5>Beverage</h5>
                </li>
                <li> <img src={img17} alt="Packaged food" />
                    <h5>Packaged foods</h5>
                </li>
                <li> <img src={img18} alt="Personal Care" />
                    <h5>Personal Care</h5>
                </li>
                <li> <img src={img19} alt="Baby Care" />
                    <h5>Baby Care </h5>
                </li>
                <li> <img src={img20} alt="Pooja Needs" />
                    <h5>Pooja Needs </h5>
                </li>
                <li> <img src={img21} alt="Medicines" />
                    <h5> Medicines </h5>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>
    </section>
    <section class="pad-75 bg-lg-grey" id="hiw">
        <div class="container">
            <div class="section-title text-center">
                <h4> Why Choose DailyNinja? </h4>
                <h2> Your Home on Autopilot </h2>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="mockup">
                    <img src={img22} class="img-responsive animated zoomIn" alt="" />
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 section-text">
                <h3 class="group-title mar-t-100 xs-mar-t-100">The most convenient way to order what you need</h3>
                <p>
                    From Ordering to Checkout in just two clicks. Order till 11pm and delivery at your door the next morning by 7am along with Milk... It doesn't get much easier than this.
                </p>
                <div class="col-md-5 col-sm-6 no-padding">
                    <a href="#download-now" target="_blank" class="btn btn-more-info btn-lg page-scroll">Download Now</a>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </section>
    <section class="content-section bg-white pad-75 bg-white">
        <div class="container">
            <div class="col-md-6 col-sm-6 col-xs-12 section-text">
                <h3 class="group-title mar-t-100 xs-mar-t-100">Buy Small, Eat Fresh</h3>
                <p>
                    Why buy fruits and veggies and keep them in the fridge for a week ? Buy fresh supplies everyday.
                </p>
                <div class="col-md-5 col-sm-6 no-padding">
                    <a href="#download-now" target="_blank" class="btn btn-more-info btn-lg page-scroll">Download Now</a>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="mockup">
                    <img src={img23} class="img-responsive" alt="" />
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </section>
    <section class="content-section bg-lg-grey pad-75">
        <div class="container">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="mockup">
                    <img src={img24} class="img-responsive" alt="" />
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 section-text">
                <h3 class="group-title mar-t-100 xs-mar-t-100">Manage your Expense</h3>
                <p> Keep a tab on your daily expenses and also a consolidated view of spendings over the last week or month.
                </p>
                <div class="col-md-5 col-sm-6 no-padding">
                    <a href="#download-now" target="_blank" class="btn btn-more-info btn-lg page-scroll">Download Now</a>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </section>

    <section class="bg-white pad-75" id="testimonials">
        <div class="section-title text-center mar-t-70">
            <h4> Our customers love our app</h4>
            <h2>Customer Testimonials</h2>
            <img src={img25} class="quote-img img-responsive mar-t-50" alt="Testimonials Intenstreet" />
        </div>
        <div class="col-md-12 align-center text-center no-padding center" id="sum-testimonials">
            <div class="col-md-6 mar-t-30 pad-25 no-sm-padding">
                <div class="review-card">
                    <div class="profile">
                        {/* <!-- <img src="/gallery/img/review/karan.jpg" class="img-circle" alt="DailyNinja Review"> --> */}
                        <div id="star-rating">
                            <span class="ratings t-5"></span>
                        </div>
                        <p>DailyNinja has good customer service and prompt delivery. While I use it for milk regularly, I also use them for veggies and grocery. Good quality items.
                        </p>
                        <h4>Mrs Nisha Hegde</h4>
                        <h5>Prestige Shantiniketan</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mar-t-30 pad-25 no-sm-padding">
                <div class="review-card">
                    <div class="profile">
                        <div id="star-rating">
                            <span class="ratings t-4"></span>
                        </div>
                        <p>Life savious! I order fresh coconuts for my kids everyday
                        </p>
                        <h4> Mr Binoy Wilfred</h4>
                        <h5> Purva Venezia</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mar-t-30 pad-25 no-sm-padding">
                <div class="review-card">
                    <div class="profile">
                        <div id="star-rating">
                            <span class="ratings t-5"></span>
                        </div>
                        <p>
                            Predictable delivery every morning. The new offers and samples which keep coming is a good idea.
                        </p>
                        <h4> Mr Satish D</h4>
                        <h5> L&T South City</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </section>

    <section class="bg-lg-grey pad-75" id="contact">
        <div class="container">
            <div class="section-title text-center">
                <h4> Have Questions? Feel Free to reach out</h4>
                <h2>Contact Us</h2>
            </div>
            <div class="mar-t-70 text-center">
                <h5> <i class="fa fa-envelope" aria-hidden="true"></i> <label class="mar-r-10"> Email </label> contact@dailyninja.in </h5>
                <h5> <i class="fa fa-phone" aria-hidden="true"></i> <label class="mar-r-10"> Phone </label> +91-88800 99400 </h5>
            </div>
        </div>
    </section>
    <section class="content-section bg-white pad-75 locations" id="download-now">
        <div class="gradient"></div>
        <div class="container text-center">
            <h2 class="group-title mar-t-100 text-wh fw-bold xs-mar-t-100 ">Available in Bangalore, Hyderabad, Chennai, Mumbai &amp; Pune</h2>
            <h4 class="text-wh"> Download the app now </h4>
            <div class="download-icons mar-t-40">
                <a href="http://bit.ly/dn-android"> <img src={img26} alt="DailyNinja Android playstore" /> </a>
                <a href="http://bit.ly/dailyninjaios"> <img src={img27} alt="DailyNinja iStore playstore" /> </a>
            </div>
            {/* <!-- <form action="" class="align-center building-search">
            <div class="pos-rel">
                <input type="text" name="building-names" class="form-control" placeholder="Search your building" id="autocomplete">
                <img src=img27 alt="Search Available building on DailyNinja" class="icon-search">
            </div>
        </form>    --> */}
            <div class="clearfix"></div>
        </div>
    </section>
    <section class="content-featured text-center">
        <div class="main-container">
            <ul class="featured">
                <li><a href="https://yourstory.com/2016/08/dailyninja-funding/" target="_blank">
                <img src={img28} alt="DailyNinja on YourStory" /> </a></li>
                <li><a href="http://tech.economictimes.indiatimes.com/news/startups/india-funding-daily-ola-quickli-quick-heal-qualcomm-shoto-daily-ninja/49137651" target="_blank">
                <img src={img29} alt="DailyNinja on ET Logo" /> </a></li>
                <li><a href="http://knowstartup.com/2015/09/dailyninja-raises-funds/" target="_blank"> 
                    <img src={img30} alt="DailyNinja on knowstartup" /> </a></li>
                <li><a href="http://www.vccircle.com/news/technology/2015/09/28/daily-ninja-gets-seed-funding-tfs-radhakrishna-others" target="_blank">
                    <img src={img31} alt="DailyNinja on vccircle" /> </a></li>
                <li><a href="http://www.iamwire.com/2015/09/dailyninja-funding-aprameya-radhakrishna-taxiforsure-cofounder-naman-sarawagi-find-yogi-afsal-salu-delyver/122930" target="_blank">
                    <img src={img32} alt="DailyNinja on Iamwire" /> </a></li>
                <li><a href="http://inc42.com/buzz/dailyninja-raises-funds/" target="_blank">
                <img src={img33} alt="DailyNinja on Inc42" /> </a></li>
                <li><a href="https://www.digifire.in/2015/12/18/interview-with-sagar-yarnalkar-co-founder-at-daily-ninja/" target="_blank">
                    <img src={img34} alt="DailyNinja on Iamwire" /> </a></li>
            </ul>
        </div>
    </section>
    <footer>
        <div class="footer container font">
            <div class="col-md-2 col-sm-4 col-xs-12 mar-t-20">
                <ul class="footer-links">
                    <h4 class="__title"> Useful Links </h4>
                    <li><a href="#contact" class="page-scroll"> Contact Us </a></li>
                    <li><a href="https://angel.co/dailyninja/jobs"> Careers </a></li>
                    <li><a href="terms.html"> Terms & Conditions </a></li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12  mar-t-20">
                <ul class="footer-links footer-social-links">
                    <h4 class="__title"> Find us on</h4>
                    <li><a href="https://www.facebook.com/dailyNinjaApp" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/dailyninjaapp" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/9473703/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12 mar-t-20">
                <ul class="footer-links">
                    <h4 class="__title"> Contact </h4>
                    <li><a href="mailto:contact@dailyninja.in" class="page-scroll">
                    <i class="fa fa-envelope mar-r-10" aria-hidden="true"></i> contact@dailyninja.in </a>
                    </li>
                    <li><a href="#"><i class="fa fa-phone mar-r-10" aria-hidden="true"></i> +91-88800 99400 </a></li>
                </ul>
            </div>
            <div class="col-md-3 col-xs-12 pull-right">
                <ul class="featured featured-sm">
                    <li><a href="https://msg91.com/startups/?utm_source=startup-banner"> <img src="https://msg91.com/images/startups/msg91Badge.png" alt="msg91 Logo" /> </a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
            <hr />
            <p class="copyright-text"> Copyright © DailyNinja 2018 | Icons taken from Flaticon.com </p>
        </div>
    </footer>
     </div>
     )
  }
}
export default Dashboard
