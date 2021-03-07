import React from 'react';
import Layout from './layout';
import * as styles from './PageLayout.module.css';

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <div className={styles.container}>
        {children}
      </div>
    </Layout>
  )
}

export default PageLayout;
