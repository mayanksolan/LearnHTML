import React from 'react'
import '../styles/footerDemo.css';
import {Row, Col, Container} from 'react-bootstrap'


class FooterDemo extends React.Component{
    render(){
        return(
            <React.Fragment>

        <section className="section-footer home footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 col-lg-offset-1">
                  <ul className="footer-links">
                    <li>
                      <ul>
                        <li>
                          <h2>Products</h2>
                        </li>
                        <li>
                          <a href="#">Infolabs</a>
                        </li>
                        <li>
                          <a href="#">Image Labs</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <h2>Resources</h2>
                        </li>
                        <li>
                          <a href="#">Technical Support</a>
                        </li>
                        <li>
                          <a href="#">Purchasing & licensing</a>
                        </li>
                        <li>
                          <a href="#">Farmguide Community</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <h2>Expand &amp; Learn</h2>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                        <li>
                          <a href="#">Documentation</a>
                        </li>
                        <li>
                          <a href="#">Purchasing FAQ</a>
                        </li>
                        <li>
                          <a href="#">Enterprise services</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <h2>About Crickick</h2>
                        </li>
                        <li>
                          <a href="#">Company</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Blogs</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid footer-links-bg">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 col-lg-offset-1">
                  <ul className="footer-links-bottom">
                    <li>
                      <select>
                        <option>Language</option>
                        <option>Hindi</option>
                        <option>Punjabi</option>
                      </select>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of use</a>
                    </li>
                    <li>
                      <a href="#">&copy; 2010-2018 Crickick, All rights reserved.</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <span className="fa fa-medium"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-youtube"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </section>

          	</React.Fragment>
        )
    }
}
export default FooterDemo
