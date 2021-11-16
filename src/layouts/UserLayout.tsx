import React, {  } from 'react';
import { Link} from 'react-router-dom'

import logo from '../assets/logo.svg';
import styles from './UserLayout.less'

const Layout: React.FC = (props) => {
  return (<div className={styles.container}>

    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
            <span className={styles.title}>Ant Design</span>
          </Link>
        </div>
        <div className={styles.desc}>
          Web 设计规范asda
        </div>
      </div>
      {props.children}
    </div>

  </div>);
};

export default Layout;
