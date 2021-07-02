import React, { Component } from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

class BlogHeaders extends Component {
	render() {
		let { categories, date } = this.props
		return (
			<div>
				<Row>
					<Col md={6} xs={6} className="text-xxs d-flex align-items-end text-grey1">
						<span className="mr-1"><FontAwesomeIcon icon={faCalendarAlt} /></span>
						<span className="text-weight-500 ">
							<Moment date={date} format="MMM Do 'YY" />
						</span>
					</Col> 
					<Col md={6} xs={6} className="text-right text-truncate">
						{categories.length > 0 ?
							<>
								<span className="mr-2 text-xxs"><FontAwesomeIcon style={{width:'1.25rem'}} icon={faTags} /></span>
								<span className="dash-seperator">
									{categories.map((category, i) =>
										<span key={i} className="text-xxs">
											<a href="#" style={{color:'#007bff'}}>{category.Name} </a>
										</span>
									)}
								</span>
							</>
							: ""}
					</Col>
				</Row>


			</div>
		);
	}
}

export default BlogHeaders;