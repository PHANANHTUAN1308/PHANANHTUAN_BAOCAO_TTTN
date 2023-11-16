import React from "react";

const ProfileWishlist = () => (
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
          <article className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <figure className="itemside mb-4">
                    <div className="aside">
                      <img src={require("../../assets/images/items/1.jpg")} className="border img-md" />
                    </div>
                    <figcaption className="info">
                      <a href="#" className="title">
                        Great product name goes here
                      </a>
                      <p className="price mb-2">$80</p>
                      <a href="#" className="btn btn-secondary btn-sm">
                        {" "}
                        Add to cart{" "}
                      </a>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Remove from wishlist"
                      >
                        {" "}
                        <i className="fa fa-times" />{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>{" "}
                {/* col.// */}
                <div className="col-md-6">
                  <figure className="itemside mb-4">
                    <div className="aside">
                      <img src={require("../../assets/images/items/2.jpg")} className="border img-md" />
                    </div>
                    <figcaption className="info">
                      <a href="#" className="title">
                        Men's Jackeet for Winter{" "}
                      </a>
                      <p className="price mb-2">$1280</p>
                      <a href="#" className="btn btn-secondary btn-sm">
                        {" "}
                        Add to cart{" "}
                      </a>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Remove from wishlist"
                      >
                        {" "}
                        <i className="fa fa-times" />{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>{" "}
                {/* col.// */}
                <div className="col-md-6">
                  <figure className="itemside mb-4">
                    <div className="aside">
                      <img src={require("../../assets/images/items/3.jpg")} className="border img-md" />
                    </div>
                    <figcaption className="info">
                      <a href="#" className="title">
                        Another book of item goes here{" "}
                      </a>
                      <p className="price mb-2">$280</p>
                      <a href="#" className="btn btn-secondary btn-sm">
                        {" "}
                        Add to cart{" "}
                      </a>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Remove from wishlist"
                      >
                        {" "}
                        <i className="fa fa-times" />{" "}
                      </a>
                    </figcaption>
                  </figure>
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row .//  */}
            </div>{" "}
            {/* card-body.// */}
          </article>
        </main>{" "}
        {/* col.// */}
      </div>
    </div>{" "}
    {/* container .//  */}
  </section>
    </>
);
export default ProfileWishlist;