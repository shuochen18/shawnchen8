import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built By Shuo Chen &middot;{' '}
      <a href="https://github.com/shuochen18/shawnchen8" target='_blank'>Source</a>
    </div>
  </Container>
)

export default Footer
