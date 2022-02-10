import Head from 'next/head'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import ReactHtmlParser from 'react-html-parser';
function HeadPage(props) {
    const { blogPost, htitle } = props;
    let title = blogPost?.title?.replace(/\s/g, "-")
    const strippedString = blogPost?.content?.replace(/(<([^>]+)>)/gi, "").substring(0, 100);
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }
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
            <title>{blogPost?.title?`getEDGE Blog : ${blogPost?.title}` :`getEDGE ${capitalize(htitle.split("-")[1])}`}</title>
            <meta property="fb:app_id" content="461794585182726" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={AddCmsImgBaseUrl(blogPost?.featuredImage?.url)} />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:url" content={`https://getedge.ntb.one/blog/${title}`} />
            <meta property="og:title" content={blogPost?.title} />

            <meta property="og:description" content={blogPost?.content?.replace(/(<([^>]+)>)/gi, "").substring(0, 100)} />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content={AddCmsImgBaseUrl(blogPost?.featuredImage?.url)} />
            <meta property="twitter:image:width" content="550" />
            <meta property="twitter:image:height" content="550" />
            <meta property="twitter:url" content={`https://getedge.ntb.one/blog/${title}`} />
            <meta property="twitter:title" content={blogPost?.title} />
            <meta property="twitter:description" content={strippedString} />
        </Head>
    )
}

export default HeadPage