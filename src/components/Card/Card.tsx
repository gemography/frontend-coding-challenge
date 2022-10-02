import React from 'react';
import { GithubRepoType } from '../../store/githubRepo';
import styles from './card.module.css';

type CardProps = Partial<GithubRepoType>;
function Card({
  name,
  owner,
  description,
  stargazers_count,
  open_issues_count,
}: CardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        alt='avatar url'
        src={owner?.avatar_url}
      />
      <div className={styles.cardbody}>
        <div className={styles.cardHeader}>{name}</div>
        <div>{description}</div>
        <div className={styles.footer}>
          <div className={styles.rating}>Stars: {stargazers_count}k</div>
          <div className={styles.issues}>Issues: {open_issues_count}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
