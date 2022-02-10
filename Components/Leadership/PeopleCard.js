import React, { Component } from 'react'
import styles from './Leadership.module.scss'
import { AddCmsImgBaseUrl } from '../../Utils/Utils';
import ReactHtmlParser from 'react-html-parser';

export default class PeopleCard extends Component {
  
  render() {
    let people = this.props.data
    console.log("peopel",people)
    return (
      <div>
        <div className={styles.peopleCard + " mb-5"}>
          <div className="mt-2">
            <img src={AddCmsImgBaseUrl(people.imgUrl.url)} alt={people.name} className={styles.peopleImg} />
          </div>
          <h4 className={styles.peopleName + " mt-3 font-weight-bold"}>
            {people.name}
          </h4>
          <div className={styles.peopleTitle + " mt-1"}>
            <span>{people.title}</span>
          </div>
          {people.IsShowLinkedIn ?
            <div className='ml-1'>
              <img onClick={() => window.open(people?.linkedIn,"_blank")} src={AddCmsImgBaseUrl('/uploads/linkedin_d0a0d76670.svg')} alt="" height={24} width={24} />
            </div>
            :
            <div className={styles.peopleDesc + " mt-4 text-md pr-2"}>
              <span>{ReactHtmlParser(people.desc)}</span>
            </div>
          }
        </div>
      </div>
    )
  }
}