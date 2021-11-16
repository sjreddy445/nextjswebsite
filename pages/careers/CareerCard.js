import React, { Component } from 'react';
import Contact from './Contact';
import ReactHtmlParser from 'react-html-parser';
import styles from "./career.module.scss";
class CareerCard extends Component {
  constructor() {
    super()
    this.state = {
      details: {},
      openingData: []

    };
  }
  componentDidMount() {
    this.setState({
      details: this.props?.data?.career_detail,
      openingData: this.props?.data?.career_openings,
    })
  }

  checkTitleExist(type) {
    let abc = this.state.openingData.findIndex(x => x[type] !== null && x[type] !== '' );
    return abc;
  }

  render() {
    return (
      <div className={styles.careercard}>
        <div className={styles.leftcol}>
          <h4 className={styles.coltitle}>Details</h4>
          <table>
            <tbody>
              {this.state?.details?.experience ?
                <tr key={`details-table-row-${0}`}>
                  <th>{'Experience'}</th>
                  <td>{this.state?.details?.experience}</td>
                </tr> : ""}
              {this.state?.details?.education ?
                <tr key={`details-table-row-${1}`}>
                  <th>{'Education'}</th>
                  <td>{this.state?.details?.education}</td>
                </tr> : ""}
              {this.state?.details?.role ?
                <tr key={`details-table-row-${2}`}>
                  <th>{'Role'}</th>
                  <td>{this.state?.details?.role}</td>
                </tr> : ''}
              {this.state?.details?.functionalArea ?
                <tr key={`details-table-row-${3}`}>
                  <th>{'Functional Area'}</th>
                  <td>{this.state?.details?.functionalArea}</td>
                </tr> : ''}
              {this.state?.details?.location ?
                <tr key={`details-table-row-${4}`}>
                  <th>{'Location'}</th>
                  <td>{this.state?.details?.location}</td>
                </tr> : ''}
              {this.state?.details?.compensation ?
                <tr key={`details-table-row-${5}`}>
                  <th>{'Compensation'}</th>
                  <td>{this.state?.details?.compensation}</td>
                </tr> : ''}
            </tbody>
          </table>
        </div>
        <div className={styles.rightcol}>
          {this.state?.openingData.length > 0 ?
            <>
              {this.checkTitleExist('responsibilities') !== -1 && <h4 className={styles.coltitle}>Job Responsibilities</h4>}
              {this.state?.openingData.map((data, listIndex) => {
                var res = null;
                if (data.responsibilities) {
                  var res = <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.responsibilities)}
                  </div>
                }
                return res;
              })}
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('requirements') !== -1 && <h4 className={styles.coltitle}>Job Requirements</h4>}
              {this.state?.openingData.map((data, listIndex) => {
                var res = null;
                if (data.requirements) {
                  res = <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.requirements)}
                  </div>
                }
                return res;
              })}
            </>
            :
            ""
          }
          {this.state.salesMmanagement ?
            <>
              {checkTitleExist('salesMmanagement') !== -1 && <h4 className={styles.coltitle}>Sales Management</h4>}
              {this.state?.salesMmanagement?.map((data, listIndex) =>
                <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.text)}
                </div>
              )}
            </>
            :
            ""
          }
          {this.state.prospects ?
            <>
             <h4 className={styles.coltitle}>Prospects and Pipeline Management</h4>

              {this.state?.prospects?.map((data, listIndex) =>
                <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.text)}
                </div>
              )}
            </>
            :
            ""
          }
          {this.state.proposals ?
            <>
              <h4 className={styles.coltitle}>Proposals, forecast, contracts, market, etc.</h4>
              {this.state?.proposals?.map((data, listIndex) =>
                <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.text)}
                </div>
              )}
            </>
            :
            ""
          }
          {this.state.productKnowledge ?
            <>
              <h4 className={styles.coltitle}>Product knowledge</h4>
              {this.state?.productKnowledge?.map((data, listIndex) =>
                <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.text)}
                </div>
              )}
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('skills') !== -1 && <h4 className={styles.coltitle}>Role Skills</h4>}
              {this.state?.openingData?.map((data, listIndex) => {
                var res = null;
                if (data.skills) {
                  res = <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.skills)}
                  </div>
                }
                return res;
              })}
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('qualifications') !== -1 && <h4 className={styles.coltitle}>Preferred Qualifications</h4>}
              {this.state?.openingData?.map((data, listIndex) => {
                var res = null;
                if (data.qualifications) {

                  res = <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.qualifications)}
                  </div>
                }
                return res;
              })}
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('interviewProcess') !== -1 && <h4 className={styles.coltitle}>Interview process</h4>}
              <h6 className="ml-4">{process.text}</h6>
              {this.state.openingData?.map((data, listIndex) => {
                var res = null;
                if (data.interviewProcess) {
                  res = <div className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.interviewProcess)}
                  </div>
                }
                return res;
              })}

            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('joinus') !== -1 && <h4 className={styles.coltitle}>{'Why should you join us'}</h4>}
              {this.state.openingData?.map((data, listIndex) => {
                var res = null;
                if (data.joinus) {
                  res = <div key={listIndex} className={styles.listitem}>{ReactHtmlParser(data.joinus)}
                  </div>
                }
                return res;
              })}
            </>
            :
            ""
          }
          <div>
            {/* <ApplyForm /> */}
            <Contact data={this.props.emailData} />
          </div>
        </div>
      </div>
    )
  }
}
export default CareerCard