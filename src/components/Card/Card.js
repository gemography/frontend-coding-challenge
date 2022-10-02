import React from 'react';
import styles from './card.module.css';

function Card() {
  return (
    <div class={styles.card}>
      <img
        class={styles.cardImage}
        alt='repo icon'
        src='https://avatars.githubusercontent.com/u/14957082?v=4'
      />
      <div class={styles.cardbody}>
        <div class={styles.cardHeader}>This is some text as a card title.</div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div class={styles.footer}>
          <div class={styles.rating}>Stars: 11k</div>
          <div class={styles.issues}>Issues: 6</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
