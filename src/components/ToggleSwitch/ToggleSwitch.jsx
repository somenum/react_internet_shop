import React from 'react';
import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = (props) => {
    return (
        <div className={styles.toggleSwitch__container}>
            {props.label}{" "}
            <div className={styles.toggleSwitch}>
                <input type="checkbox" className={styles.toggleSwitch__checkbox}
                       name={props.label} id={props.label}
                       onChange={props.onChange}
                />
                <label className={styles.toggleSwitch__label} htmlFor={props.label}>
                    <span className={styles.toggleSwitch__inner} />
                    <span className={styles.toggleSwitch__switch} />
                </label>
            </div>
        </div>
    )
}

export default ToggleSwitch;