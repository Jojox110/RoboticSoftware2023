import React from 'react';

import styles from '../../Styles/DocumentationStyling.module.css'

export function DocumentationTemplate() {
    return (
        <article className={styles.documentationTemplate}>
            <h3>Block name</h3>
            <p>Description</p>
            <p>Extra info</p>
        </article>
    )
}