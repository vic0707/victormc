import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import BookIcon from '@material-ui/icons/Book';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: 'center'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            lineHeight: '1em',
            fontWeight: 500,
            fontSize: '22px',
            textTransform: 'uppercase',
            letterSpacing: '0.5em'
          }}
          to={`/`}
        >
          Victor MC
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        backgroundColor: 'black'
      }}
    >
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <header>{header}</header>
        <main style={{ flex: 1 }}>{children}</main>
        <footer style={{ margin: '0 auto'}}>
          <a href='https://twitter.com/VicMacCas7' style={{ boxShadow: 'none', color: 'white' }}>
            <TwitterIcon style={{ marginRight: '8px' }} />
          </a>
          <a href='https://www.instagram.com/vicmaccas7/' style={{ boxShadow: 'none', color: 'white' }}>
            <InstagramIcon style={{ marginRight: '8px' }} />
          </a>
          <a href='mailto:v.maciascastillo@gmail.com' style={{ boxShadow: 'none', color: 'white' }}>
            <EmailIcon style={{ marginRight: '8px' }} />
          </a>
          <Link to={`/blog`} style={{ boxShadow: 'none', color: 'white' }}>
            <BookIcon />
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Layout
