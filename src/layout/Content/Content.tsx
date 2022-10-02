import styles from './content.module.css';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Content: React.FC<Props> = ({ children }) => (
  <div className={styles.content}>{children}</div>
);
export default Content;
