import React from "react";
import "../CSS/Homepage.css";
const Homepage = () => {
  return (
    <div>
      <div className="title">Dashboard</div>
      <section id="dashboard" className=" mainDiv">
        <div className="tabs">
          <button>Student</button>
          <button>Teacher</button>
          <button>Admin</button>
        </div>
        <div className="addUserSection">
          <div class="search-data">
            <i class="bx bx-search"></i>
            <input
              type="text"
              className="inputElemnet"
              placeholder="Search for admins"
            />
          </div>
          <button onclick=" ">Add Student</button>
          <button onclick=" ">Download CSV</button>
        </div>

        <table className="Student-table">
          <tr>
            <th>SNo.</th>
            <th>Name</th>
            <th>Rollno</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Philip Cramer</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Simon Crowther</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
        </table>
      </section>
    </div>
  );
};
export default Homepage;
