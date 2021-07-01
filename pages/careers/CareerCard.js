import React, { Component } from 'react';
import Contact from './Contact';
import ReactHtmlParser from 'react-html-parser';
import styles from "./career.module.scss";
class CareerCard extends Component {
  constructor() {
    super()
    this.state = {
      details: [],
      responsibilities: [],
      requirements: [],
      salesMmanagement: [],
      prospects: [],
      proposals: [],
      productKnowledge: [],
      why: {},
      process: [],
      qualifications: [],
      skills: []
    };
  }
  componentDidMount() {
    this.setState({
      details: this.props.data.details,
      responsibilities: this.props.data.responsibilities,
      requirements: this.props.data.requirements,
      salesMmanagement: this.props.data.salesMmanagement,
      prospects: this.props.data.prospects,
      proposals: this.props.data.proposals,
      productKnowledge: this.props.data.productKnowledge,
      why: this.props.data.why,
      process: this.props.data.process,
      qualifications: this.props.data.qualifications,
      skills: this.props.data.skills
    })
  }
  render() {
    return (
      <div className={styles.careercard}>
        <div className={styles.leftcol}>
          <h4 className={styles.coltitle}>Details</h4>
          <table>
            <tbody>
              {this.state.details && this.state.details.map((data, index) =>
                <tr key={`details-table-row-${index}`}>
                  <th>{data.label}</th>
                  <td>{data.text}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.rightcol}>
          {this.state.responsibilities ?
            <>
              <h4 className={styles.coltitle}>Job Responsibilities</h4>
              <ul>
                {this.state.responsibilities.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{ReactHtmlParser(subData.text)}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.requirements ?
            <>
              <h4 className={styles.coltitle}>Job Requirements</h4>
              <ul>
                {this.state.requirements.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{ReactHtmlParser(data.text)}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{ReactHtmlParser(subData.text)}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.salesMmanagement ?
            <>
              <h4 className={styles.coltitle}>Sales Management</h4>
              <ul>
                {this.state.salesMmanagement.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
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
                {this.state.prospects.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem} > {subData.text}</li>)}</ul> : ''}
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
                {this.state.proposals.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
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
                {this.state.productKnowledge.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.skills ?
            <>
              <h4 className={styles.coltitle}>Role Skills</h4>
              <ul>
                {this.state.skills.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.qualifications ?
            <>
              <h4 className={styles.coltitle}>Preferred Qualifications</h4>
              <ul>
                {this.state.qualifications.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.process ?
            <>
              <h4 className={styles.coltitle}>Interview process</h4>
              <h6 className="ml-4">{process.text}</h6>
              <ul>
                {this.state.process && this.state.process.label && this.state.process.label.map((data, listIndex) =>
                  <li className={styles.listitem} key={`list-item-${listIndex}`}>{data.text}
                    {data.sub ? <ul>{data.sub.map((subData, index) => <li key={`sub_list_${index}`} className={styles.sublistitem}>{subData.text}</li>)}</ul> : ''}
                  </li>
                )}
              </ul>
            </>
            :
            ""
          }
          {this.state.why ?
            <>
              <h4 className={styles.coltitle}>{this.state.why.label}</h4>
              <ul>
                <li className={styles.listitem}>{this.state.why.text}
                </li>
              </ul>
            </>
            :
            ""
          }
          <div>
            {/* <ApplyForm /> */}
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}
export default CareerCard