import React, { Component } from 'react';
import Link from 'next/link';
import styles from './sitemap.module.scss'
import styled from 'styled-components';
class SitemalList extends Component {
	render() {
		return (
			<div className={"container-inner "}>
				<div className="title mb-3">
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link  href="/">Home</Link></h4>
				</div>
				<div>
					<h4 className="text-md">Products</h4>
					<h4 className={"text-md ml-4 "+styles.link}><Link prefetch={true} href="/products/pathfinder">Pathfinder</Link></h4>
					<h4 className={"text-md ml-4 "+styles.link}><Link prefetch={true} href="/products/recruit">Recruit</Link></h4>
					<h4 className={"text-md ml-4 "+styles.link}><Link prefetch={true} href="/products/mobility">Mobility</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/contact">Contact</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/careers">Careers</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/life-at-edge">Life at Edge</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/about">About us</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/blog">Blog + Resources</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/ela">ELA</Link></h4>
				</div>
				<div>
					<h4 className={"text-md "+styles.link}><Link prefetch={true} href="/privacy">Privacy</Link></h4>
				</div>
			</div>
		);
	}
}

export default SitemalList;