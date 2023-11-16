
import React from "react";
import { Link } from "react-router-dom";

const Contact= () => (
<>
<section className="container">
  {/*Contact heading*/}
  <h2 className="h1 m-0">Contact us</h2>
  {/*Contact description*/}
  <p className="pb-4">
    
  </p>
  <div className="row">
    {/*Grid column*/}
    <div className="col-lg-5 mb-4">
      {/*Form with header*/}
      <div className="card border-primary rounded-0">
        <div className="card-header p-0">
          <div className="bg-primary text-white text-center py-2">
            <h3>
              <i className="fa fa-envelope" /> Write to us:
            </h3>
            <p className="m-0">
              We'll write rarely, but only the best content.
            </p>
          </div>
        </div>
        <div className="card-body p-3">
          {/*Body*/}
          <div className="form-group">
            <label>Your name</label>
            <div className="input-group">
              <div className="input-group-addon bg-light">
                <i className="fa fa-user text-primary" />
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Your email</label>
            <div className="input-group mb-2 mb-sm-0">
              <div className="input-group-addon bg-light">
                <i className="fa fa-envelope text-primary" />
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Service</label>
            <div className="input-group mb-2 mb-sm-0">
              <div className="input-group-addon bg-light">
                <i className="fa fa-tag prefix text-primary" />
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <div className="input-group mb-2 mb-sm-0">
              <div className="input-group-addon bg-light">
                <i className="fa fa-pencil text-primary" />
              </div>
              <textarea className="form-control" defaultValue={""} />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-block rounded-0 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/*Form with header*/}
    </div>
    {/*Grid column*/}
    {/*Grid column*/}
    <div className="col-lg-7">
      {/*Google map*/}
      <div className="mb-4"></div>
      {/*Buttons*/}
      <div className="row text-center">
        <div className="col-md-4">
          <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
            <i className="fa fa-map-marker" />
          </a>
          <p>
            San Francisco, CA 94126,
            <br /> United States
          </p>
        </div>
        <div className="col-md-4">
          <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
            <i className="fa fa-phone" />
          </a>
          <p>
            + 01 234 567 89, <br /> Mon - Fri, 8:00-22:00
          </p>
        </div>
        <div className="col-md-4">
          <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
            <i className="fa fa-envelope" />
          </a>
          <p>
            info@gmail.com <br /> sale@gmail.com
          </p>
        </div>
      </div>
    </div>
    {/*Grid column*/}
  </div>
</section>


</>
);

export default Contact;