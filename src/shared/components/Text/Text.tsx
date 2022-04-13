import React from 'react';
import ClassNames from 'classnames/bind';

// styles
import styles from './Text.module.css';

const cx = ClassNames.bind(styles);

type TextProps = {
    children: React.ReactNode;
    bold: boolean;
    mb: string | number;
};

function Text({ children, mb = 0, bold = false }: TextProps) {
    const textStyles = cx({
        defaultText: true,
        bold,
    });
    return (
        <p style={{ marginBottom: `${mb}px` }} className={textStyles}>
            {children}
        </p>
    );
}

export default Text;
