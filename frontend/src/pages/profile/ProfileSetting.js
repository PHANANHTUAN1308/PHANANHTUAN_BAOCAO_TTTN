
import React from "react";

const ProfileSetting = () => (
    <>
    {/*<!-- ========================= SECTION PAGETOP ========================= -->*/}
<section class="section-pagetop bg-gray">
<div class="container">
	<h2 class="title-page">My account</h2>
</div> {/*<!-- container //  -->*/}
</section>
{/*<!-- ========================= SECTION PAGETOP END// ========================= -->*/}

{/*<!-- ========================= SECTION CONTENT ========================= -->*/}
<section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
        <a class="list-group-item active" href="/profile-main"> Account overview  </a>
            <a class="list-group-item" href="/profile-address"> My Address </a>
			<a class="list-group-item" href="/profile-order"> My Orders </a>
			<a class="list-group-item" href="/profile-wishlist"> My wishlist </a>
			<a class="list-group-item" href="/profile-seller"> My Selling Items </a>
			<a class="list-group-item" href="/profile-setting"> Settings </a>
			<a class="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> {/*<!-- col.// -->*/}
	<main class="col-md-9">

	<div class="card">
      <div class="card-body">
     <form class="row">
     	<div class="col-md-9">
     		<div class="form-row">
				<div class="col form-group">
					<label>Name</label>
				  	<input type="text" class="form-control" value="Vosidiy"/>
				</div> {/*<!-- form-group end.// -->*/}
				<div class="col form-group">
					<label>Email</label>
				  	<input type="email" class="form-control" value="vosidiy@gmail.com"/>
				</div> {/*<!-- form-group end.// -->*/}
			</div> {/*<!-- form-row.// -->*/}
			
			<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Country</label>
				  <select id="inputState" class="form-control">
				    <option> Choose...</option>
				      <option>Uzbekistan</option>
				      <option>Russia</option>
				      <option selected="">United States</option>
				      <option>India</option>
				      <option>Afganistan</option>
				  </select>
				</div> {/*<!-- form-group end.// -->*/}
				<div class="form-group col-md-6">
				  <label>City</label>
				  <input type="text" class="form-control"/>
				</div> {/*<!-- form-group end.// -->*/}
			</div> {/*<!-- form-row.// -->*/}

			<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Zip</label>
				  <input type="text" class="form-control" value="123009"/>
				</div> {/*<!-- form-group end.// -->*/}
				<div class="form-group col-md-6">
				  <label>Phone</label>
				  <input type="text" class="form-control" value="+123456789"/>
				</div> {/*<!-- form-group end.// -->*/}
			</div> {/*<!-- form-row.// -->*/}

			<button class="btn btn-primary">Save</button>	
			<button class="btn btn-light">Change password</button>	

			<br/><br/><br/><br/><br/><br/>

     	</div> {/*<!-- col.// -->*/}
     	<div class="col-md">
     		<img src={require("../../assets/images/avatars/avatar1.jpg")} class="img-md rounded-circle border"/>
     	</div>  {/*<!-- col.// -->*/}
      </form>
      </div> {/*<!-- card-body.// -->*/}
    </div> {/*<!-- card .// -->*/}



	</main> {/*<!-- col.// -->*/}
</div>

</div> {/*<!-- container .//  -->*/}
</section>
{/*<!-- ========================= SECTION CONTENT END// ========================= -->*/}
</>
);
export default ProfileSetting;