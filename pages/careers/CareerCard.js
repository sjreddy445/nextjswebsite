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
    let abc = this.state.openingData.findIndex(x => x[type] !== null);
    return abc;
  }

  render() {
    return (
      <div className={styles.careercard}>
        <div className={styles.leftcol}>
          <h4 className={styles.coltitle}>Details</h4>
          <table>
            <tbody>

              <tr key={`details-table-row-${0}`}>
                <th>{'Experience'}</th>
                <td>{this.state?.details?.experience}</td>
              </tr>
              <tr key={`details-table-row-${1}`}>
                <th>{'Education'}</th>
                <td>{this.state?.details?.education}</td>
              </tr>
              <tr key={`details-table-row-${2}`}>
                <th>{'Role'}</th>
                <td>{this.state?.details?.role}</td>
              </tr>
              <tr key={`details-table-row-${3}`}>
                <th>{'Functional Area'}</th>
                <td>{this.state?.details?.functionalArea}</td>
              </tr>
              <tr key={`details-table-row-${4}`}>
                <th>{'Location'}</th>
                <td>{this.state?.details?.location}</td>
              </tr>
              <tr key={`details-table-row-${5}`}>
                <th>{'Compensation'}</th>
                <td>{this.state?.details?.compensation}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.rightcol}>
          {this.state?.openingData.length > 0 ?
            <>
              {this.checkTitleExist('responsibilities') !== -1 && <h4 className={styles.coltitle}>Job Responsibilities</h4>}
              <ul>
                {this.state?.openingData.map((data, listIndex) => {
                  var res = null;
                  if (data.responsibilities) {
                    var res = <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.responsibilities}
                    </li>
                  }
                  return res;
                })}

              </ul>
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('requirements') !== -1 && <h4 className={styles.coltitle}>Job Requirements</h4>}
              <ul>
                {this.state?.openingData.map((data, listIndex) => {
                  var res = null;
                  if (data.requirements) {
                    res = <li className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.requirements)}
                    </li>
                  }
                  return res;
                })}
              </ul>
            </>
            :
            ""
          }
          {this.state.salesMmanagement ?
            <>
              {checkTitleExist('salesMmanagement') !== -1 && <h4 className={styles.coltitle}>Sales Management</h4>}
              <ul>
                {this.state?.salesMmanagement?.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data?.sub ? <ul>{data?.sub?.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.prospects ?
            <>
              <h4 className={styles.coltitle}>Prospects and Pipeline Management</h4>
              <ul>
                {this.state?.prospects?.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data?.sub ? <ul>{data?.sub?.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem} > {subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.proposals ?
            <>
              <h4 className={styles.coltitle}>Proposals, forecast, contracts, market, etc.</h4>
              <ul>
                {this.state?.proposals?.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data?.sub ? <ul>{data?.sub?.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.productKnowledge ?
            <>
              <h4 className={styles.coltitle}>Product knowledge</h4>
              <ul>
                {this.state?.productKnowledge?.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data?.sub ? <ul>{data?.sub?.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('skills') !== -1 && <h4 className={styles.coltitle}>Role Skills</h4>}
              <ul>
                {this.state?.openingData?.map((data, listIndex) => {
                  var res = null;
                  if (data.skills) {
                    res = <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.skills}
                    </li>
                  }
                  return res;
                })}
              </ul>
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('qualifications') !== -1 && <h4 className={styles.coltitle}>Preferred Qualifications</h4>}
              <ul>
                {this.state?.openingData?.map((data, listIndex) => {
                  var res = null;
                  if (data.qualifications) {

                    res = <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.qualifications}
                    </li>
                  }
                  return res;
                })}
              </ul>
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('interviewProcess') !== -1 && <h4 className={styles.coltitle}>Interview process</h4>}
              <h6 className="ml-4">{process.text}</h6>
              <ul>
                {this.state.openingData?.map((data, listIndex) => {
                  var res = null;
                  if (data.interviewProcess) {
                    res = <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.interviewProcess}
                      {/* {data.sub ? <ul>{data?.sub?.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''} */}
                    </li>
                  }
                  return res;
                })}
              </ul>
            </>
            :
            ""
          }
          {this.state.openingData.length > 0 ?
            <>
              {this.checkTitleExist('joinus') !== -1 && <h4 className={styles.coltitle}>{'Why should you join us'}</h4>}
              <ul>
                {this.state.openingData?.map((data, listIndex) => {
                  var res = null;
                  if (data.joinus) {
                    res = <li key={listIndex} className={styles.listitem}>{data.joinus}
                    </li>
                  }
                  return res;
                })}
              </ul>
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