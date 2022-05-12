import React from 'react'

import Container from '../container'
import * as styles from './footer.module.css'
import { SocialIcon } from 'react-social-icons';
// import {instLogo} from '../../static/imgs/social-platform/inst.svg';
// import tiktokLogo from 'static/imgs/social-platform/tiktok.svg';
// import linkedInLogo from 'static/imgs/social-platform/linkedIn.svg';

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.socialicons}>
        {/* <a><img src={instLogo}/></a>
        <a><img src={instLogo}/></a>
        <a><img src={instLogo}/></a> */}
      </div>
      <div>
        Built By Shuo Chen &middot;{' '}
        <a href="https://github.com/shuochen18/shawnchen8" target='_blank' rel="noreferrer">Source</a>
      </div>
    </div>
  </Container>
)

export default Footer
