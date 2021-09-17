import Head from 'next/head'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import ReactHtmlParser from 'react-html-parser';
function HeadPage(props) {
    const { blogPost} = props;
    let title=blogPost?.title?.replace(/\s/g, "-")
    const strippedString = blogPost?.content?.replace(/(<([^>]+)>)/gi, "");
    return (
        <Head >
            <meta name="google-site-verification" content="EiX1HxWJfBm1Db6kI8be_kno-5tqucCTkb1EC3IE0iM" />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            {blogPost && <title>{`getEDGE Blog : ${blogPost?.title}`}</title>}
            <meta property="fb:app_id" content="461794585182726" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={blogPost ? `https://getedge.ntb.one/blog/${title}` : "https://getedge.ntb.one/"} />
            <meta property="og:title" content={blogPost ? blogPost?.title : "getEdGE AI: HR Strategic Workforce Talent Management Simplified"} />
            <meta property="og:image" content={blogPost ? AddCmsImgBaseUrl(blogPost?.featuredImage?.url) : "https://getedge.ntb.one/images/Home/product1.jpg"} />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:description" content={blogPost ? blogPost?.content?.replace(/(<([^>]+)>)/gi, "") : "getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management."} />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={blogPost ? `https://getedge.ntb.one/blog/${title}` : "https://getedge.ntb.one/"} />
            <meta property="twitter:title" content={blogPost ? blogPost?.title : "getEdGE AI: HR Strategic Workforce Talent Management Simplified"} />
            <meta property="twitter:image" content={blogPost ? AddCmsImgBaseUrl(blogPost?.featuredImage?.url) : "https://getedge.ntb.one/images/Home/product1.jpg"} />
            <meta property="twitter:image:width" content="550" />
            <meta property="twitter:image:height" content="550" />
            <meta property="twitter:description" content={blogPost ? strippedString : "getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management."} />
        </Head>
    )
}

export default HeadPage