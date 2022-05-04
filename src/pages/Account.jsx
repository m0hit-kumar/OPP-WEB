import React from "react";
import "../CSS/Account.css";
import Images from "../js/assets.js";
function Account() {
  return (
    <div>
      <div className="title">Account</div>

      <section className="profile-sec">
        <div className="image-cropper">
          <img src={Images.User} alt="avatar" class="profile-pic" />
        </div>
        <div className=" layout">
          <div className="form-group one">
            <label>First Name</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group two">
            <label>Rollno</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group three">
            <label>Email</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group four">
            <label>Section</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group five">
            <label>Semster</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group six">
            <label>Department</label>
            <input className="form-control" type="text" />
          </div>
          <button className="seven">Save</button>
          <button className="eight">Cancel</button>
        </div>
      </section>
    </div>
  );
}

export default Account;
