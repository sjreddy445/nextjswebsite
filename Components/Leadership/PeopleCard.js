import React, { Component } from 'react'
import styles from './Leadership.module.scss'
import Image from 'next/image';
export default class PeopleCard extends Component {
  render() {
    let people = this.props.data
    return (
      <div>
        <div className={styles.peopleCard + " mb-5"}>
          <div className="mt-2">
            <img src={people.imgUrl} alt={people.name} className={styles.peopleImg} />
          </div>
          <h4 className={styles.peopleName + " mt-3 font-weight-bold"}>
            {people.name}
          </h4>
          <div className={styles.peopleTitle + " mt-1"}>
            <span>{people.title}</span>
          </div>
          <div className={styles.peopleDesc + " mt-4 text-md pr-2"}>
            <span>{people.desc}</span>
          </div>
        </div>
      </div>
    ) 
  }
}
