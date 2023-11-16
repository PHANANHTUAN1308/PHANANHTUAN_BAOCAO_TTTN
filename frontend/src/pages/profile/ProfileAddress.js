import React from "react";

const ProfileAddress = () => (
  <>
    <section className="section-pagetop bg-gray">
      <div className="container">
        <h2 className="title-page">My account</h2>
      </div>{" "}
      {/* container //  */}
    </section>
    {/* ========================= SECTION PAGETOP END// ========================= */}
    {/* ========================= SECTION CONTENT ========================= */}
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <aside className="col-md-3">
            <nav className="list-group">
            <a class="list-group-item active" href="/profile-main"> Account overview  </a>
              <a class="list-group-item" href="/profile-address"> My Address </a>
              <a class="list-group-item" href="/profile-order"> My Orders </a>
              <a class="list-group-item" href="/profile-wishlist"> My wishlist </a>
              <a class="list-group-item" href="/profile-seller"> My Selling Items </a>
              <a class="list-group-item" href="/profile-setting"> Settings </a>
              <a class="list-group-item" href="page-index-1.html"> Log out </a>
            </nav>
          </aside>{" "}
          {/* col.// */}
          <main className="col-md-9">
            <a href="#" className="btn btn-light mb-3">
              {" "}
              <i className="fa fa-plus" /> Add new address{" "}
            </a>
            <div className="row">
              <div className="col-md-6">
                <article className="box mb-4">
                  <h6>London, United Kingdom</h6>
                  <p>
                    Building: Nestone <br /> Floor: 22, Aprt: 12
                  </p>
                  <a href="#" className="btn btn-light disabled">
                    {" "}
                    <i className="fa fa-check" /> Default
                  </a>{" "}
                  <a href="#" className="btn btn-light">
                    {" "}
                    <i className="fa fa-pen" />{" "}
                  </a>{" "}
                  <a href="#" className="btn btn-light">
                    {" "}
                    <i className="text-danger fa fa-trash" />
                  </a>
                </article>
              </div>{" "}
              {/* col.// */}
              <div className="col-md-6">
                <article className="box mb-4">
                  <h6>Tashkent, Uzbekistan</h6>
                  <p>
                    Building one <br /> Floor: 2, Aprt: 32
                  </p>
                  <a href="#" className="btn btn-light">
                    Make default
                  </a>{" "}
                  <a href="#" className="btn btn-light">
                    {" "}
                    <i className="fa fa-pen" />{" "}
                  </a>{" "}
                  <a href="#" className="btn btn-light">
                    {" "}
                    <i className="text-danger fa fa-trash" />
                  </a>
                </article>
              </div>{" "}
              {/* col.// */}
              <div className="col-md-6">
                <article className="box mb-4">
                  <h6>Moscow, Russia</h6>
                  <p>
                    Lenin street <br /> Building A, Floor: 3, Aprt: 32
                  </p>
                  <a href="#" className="btn btn-light">
                    Make default
                  </a>{" "}
                  <a href="#" className="btn btn-light">
                    {" "}
                    <i className="fa fa-pen" />{" "}
                  </a>{" "}
                  <a href="#" className="btn btn-light">
                    {" "}
                    <i className="text-danger fa fa-trash" />
                  </a>
                </article>
              </div>{" "}
              {/* col.// */}
            </div>{" "}
            {/* row.// */}
          </main>{" "}
          {/* col.// */}
        </div>
      </div>{" "}
      {/* container .//  */}
    </section>
  </>
);
export default ProfileAddress;
