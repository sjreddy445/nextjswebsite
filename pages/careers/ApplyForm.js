import React, { Component } from 'react'
import style from "../../Components/ContactSect/ContactSet.module.scss"
import styles from "./career.module.scss"

export default class ApplyForm extends Component {
  render() {
    return (
      <div>

        <div className={styles.applyform}>
          <form className={style.formSect}>
            <h4>Apply Now</h4>
            <div>
              <input type="text" placeholder="Your Name"></input>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Years of Experience"></input>
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Skills"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Current Designation"></input>
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Current Company"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Contact Number"></input>
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Email"></input>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div>
                <button type="button" className="btn btn-light">Attach File</button>
              </div>
              <div>
                <button className="btn btn-primary">Apply</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
