import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <footer className="section-footer bg-secondary">
        <div className="container">
          <section className="footer-top padding-y-lg text-white">
            <div className="row">
              <aside className="col-md col-6">
                <h6 className="title">Brands</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">Adidas</Link>
                  </li>
                  <li>
                    <Link href="#">Puma</Link>
                  </li>
                  <li>
                    <Link href="#">Reebok</Link>
                  </li>
                  <li>
                    <Link href="#">Nike</Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">About us</Link>
                  </li>
                  <li>
                    <Link href="#">Career</Link>
                  </li>
                  <li>
                    <Link href="#">Find Link store</Link>
                  </li>
                  <li>
                    <Link href="#">Rules and terms</Link>
                  </li>
                  <li>
                    <Link href="#">Sitemap</Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Help</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">Contact us</Link>
                  </li>
                  <li>
                    <Link href="#">Money refund</Link>
                  </li>
                  <li>
                    <Link href="#">Order status</Link>
                  </li>
                  <li>
                    <Link href="#">Shipping info</Link>
                  </li>
                  <li>
                    <Link href="#">Open dispute</Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Account</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#"> User Login </Link>
                  </li>
                  <li>
                    <Link href="#"> User register </Link>
                  </li>
                  <li>
                    <Link href="#"> Account Setting </Link>
                  </li>
                  <li>
                    <Link href="#"> My Orders </Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-md">
                <h6 className="title">Social</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook" /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" /> Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram" /> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-youtube" /> Youtube
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            {/* row.// */}
          </section>
          {/* footer-top.// */}
          <section className="footer-bottom text-center">
            <p className="text-white">
              Privacy Policy - Terms of Use - User Information Legal Enquiry
              Guide
            </p>
            <p className="text-muted">
              © 2019 Company name, All rights reserved
            </p>
            <br />
          </section>
        </div>
        {/* //container */}
      </footer>
    );
  }
}

export default Footer;
