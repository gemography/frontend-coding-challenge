import styles from './content.module.css';
import React from 'react';

const Content = ({ children }) => (
  <div className={styles.content}>{children}</div>
);
export default Content;
