import React from 'react';

import styles from '../../Styles/DocumentationStyling.module.css'

export function DocumentationTemplate(props) {
    return (
        <article className={styles.documentationTemplate}>
            <h3>{props.x}</h3>
            <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description </p>
            <p className={styles.documentationTemplateMargin}>Extra info</p>
        </article>
    )
}