import React from 'react'
import classnames from 'classnames'
import { ThemeProvider } from 'styled-components'
import ThemeContext from '../context/ThemeContext'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Header from '../components/Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import configFacebook from '../../../utils/facebookConfig'

import '../styles/assets/fonts/font-awesome/icons'

const Template = ({ children, fullContainer, pageHeading }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <link rel="icon" href={favicon} />
        <meta content={configFacebook.apiId} property="fb:app_id" />
        <meta content="100005017326032" property="fb:admins" />
        <meta content="1839690008" property="fb:admins" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <ThemeContext.Consumer>
          {themeContext => (
            <div className="template-basketball d-block">
              <div
                className={classnames(
                  'site-wrapper clearfix',
                  themeContext.menu && 'site-wrapper--has-overlay'
                )}
              >
                <div className="site-overlay" />
                <Header />
                {pageHeading}
                <div className="site-content">
                  <div className="container">
                    <div className="row">
                      <div
                        className={
                          fullContainer
                            ? 'content col-md-12'
                            : themeContext.full
                            ? 'content col-lg-8 offset-md-2'
                            : 'content col-md-8'
                        }
                      >
                        {children}
                      </div>
                      <div
                        id="sidebar"
                        className={`sidebar col-md-${
                          fullContainer ? '12' : '4'
                        }`}
                      >
                        {!fullContainer && !themeContext.full && <Sidebar />}
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </div>
  )
}

export default Template
