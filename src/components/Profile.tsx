import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/38149334?s=460&u=fd0af436e87f94e2104bf5dac0b69caa7dc040a1&v=4" alt="Diego Fernandes"/>
      <div>
        <strong>Daniel Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}