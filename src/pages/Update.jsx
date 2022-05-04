import React from "react";
import "../CSS/Account.css";
const Update = () => {
  return (
    <div>
      <section class="py-5 my-5">
        <div class="container">
          <h1 class="mb-5">Account Settings</h1>
          <div
            class="tab-pane fade active show"
            id="account"
            role="tabpanel"
            aria-labelledby="account-tab"
          >
            <h3 class="mb-4">Account Settings</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control" value="Kiran" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" value="Acharya" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    value="kiranacharya287@gmail.com"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Phone number</label>
                  <input
                    type="text"
                    class="form-control"
                    value="+91 9876543215"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Kiran Workspace"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    class="form-control"
                    value="UI Developer"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label>Bio</label>
                  <textarea class="form-control" rows="4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore vero enim error similique quia numquam ullam corporis
                    officia odio repellendus aperiam consequatur laudantium
                    porro voluptatibus, itaque laboriosam veritatis voluptatum
                    distinctio!
                  </textarea>
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary">Update</button>
              <button class="btn btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Update;
