import React, { Component } from 'react';
import Link from 'next/link';
import styles from './sitemap.module.scss'
import styled from 'styled-components';
class SitemalList extends Component {
	render() {
		return (
			<div className={"container-inner "}>
				<div className="title mb-3">
					{/* <h3>Sitemap</h3> */}
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link  href="/">Home</Link></h4>
				</div>
				<div>
					<h4 className="text-md">Products</h4>
					<h4 className={"text-md ml-4 "+styles.link}><Link prefetch={false} href="/products/pathfinder">Pathfinder</Link></h4>
					<h4 className={"text-md ml-4 "+styles.link}><Link prefetch={false} href="/products/recruit">Recruit</Link></h4>
					<h4 className={"text-md ml-4 "+styles.link}><Link prefetch={false} href="/products/mobility">Mobility</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/contact">Contact</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/careers">Careers</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/life-at-edge">Life at Edge</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/about">About us</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/blog">Blog + Resources</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/ela">ELA</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={false} href="/privacy">Privacy</Link></h4>
				</div>
			</div>
		);
	}
}

export default SitemalList;