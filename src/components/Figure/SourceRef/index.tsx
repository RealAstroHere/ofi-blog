import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


interface Bib {
    author?: string;
    source?: string;
    licence?: string;
    licence_url?: string;
    edited?: boolean;
}

interface Props {
    bib: Bib;
}

const SourceRef = (props: Props) => {
    const { bib } = props;
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <span
                className={clsx(styles.bib, visible ? styles.visible : undefined)}
                onClick={() => setVisible(!visible)}
            >
                @
            </span>
            {visible && (
                <>
                    <span className={clsx('badge badge--secondary', styles.refItem)}>
                        Autor: {bib.author}
                    </span>
                    <a href={bib.licence_url} target="_blank" className={styles.refItem}>
                        <span className={clsx('badge badge--secondary')}>Lizenz: {bib.licence}</span>
                    </a>
                    {bib.edited && (
                        <span className={clsx('badge badge--secondary', styles.refItem)}>Bearbeitet</span>
                    )}
                    <a href={bib.source} target="_blank" className={styles.refItem}>
                        <span className={clsx('badge badge--secondary')}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </span>
                    </a>
                </>
            )}
        </>
    );
};

export default SourceRef;
