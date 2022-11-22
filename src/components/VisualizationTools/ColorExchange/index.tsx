import clsx from 'clsx';
import * as React from 'react';
import styles from './index.module.scss';
import RLColorMixer from 'rlcolormixer';
import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';

interface Props {
    color: string;
}
const invertHex = (hex: string) => {
    return `#${(Number(`0x1${hex.substring(1)}`) ^ 0xffffff).toString(16).substr(1).toUpperCase()}`;
};

const HSLToHex = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    let rStr = Math.round((r + m) * 255).toString(16);
    let gStr = Math.round((g + m) * 255).toString(16);
    let bStr = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (rStr.length == 1) rStr = '0' + r;
    if (gStr.length == 1) gStr = '0' + g;
    if (bStr.length == 1) bStr = '0' + b;

    return '#' + rStr + gStr + bStr;
};

const ColorExchange = (props: Props) => {
    const [colorA, setColorA] = React.useState(60);
    const [hexA, setHexA] = React.useState('#ffff00');
    const [colorB, setColorB] = React.useState(230);
    const [hexB, setHexB] = React.useState('#ffff00');
    const [colorS, setColorS] = React.useState(100);
    const [hexS, setHexS] = React.useState('#ffff00');
    const [mixAS, setMixAS] = React.useState('#ffff00');
    const [mixBS, setMixBS] = React.useState('#ffff00');
    const [mixAPrivate, setMixAPrivate] = React.useState('#ffff00');
    const [mixBPrivate, setMixBPrivate] = React.useState('#ffff00');

    React.useEffect(() => {
        setHexA(HSLToHex(colorA, 100, 50));
    }, [colorA]);
    React.useEffect(() => {
        setHexB(HSLToHex(colorB, 100, 50));
    }, [colorB]);
    React.useEffect(() => {
        setHexS(HSLToHex(colorS, 100, 50));
    }, [colorS]);

    React.useEffect(() => {
        setMixAS(`#${RLColorMixer.mixColors([hexA, hexS])}`);
    }, [hexA, hexS]);
    React.useEffect(() => {
        setMixBS(`#${RLColorMixer.mixColors([hexB, hexS])}`);
    }, [hexB, hexS]);

    React.useEffect(() => {
        const mix = RLColorMixer.mixColors([hexA, hexS, hexB]);
        // do it the faky way :/
        setMixAPrivate(`#${mix}`);
        setMixBPrivate(`#${mix}`);
    }, [hexA, hexS, hexB]);

    // React.useEffect(() => {
    //     setMixBPrivate(`#${RLColorMixer.mixColors([{color: mixAS, parts: 20}, {color: hexB, parts: 10}])}`)
    // }, [mixAS, hexB]);

    // React.useEffect(() => {
    //     setMixAPrivate(`#${RLColorMixer.mixColors([{color: mixBS, parts: 20}, {color: hexA, parts: 10}])}`)
    // }, [mixBS, hexA]);

    return (
        <div className={styles.container}>
            <div className={clsx(styles.A)}>
                <ColorPicker
                    className={clsx(styles.colorPicker, 'umami--click--color-exchange-colorpicker')}
                    hue={colorA}
                    onInput={(h) => setColorA(h)}
                    initiallyCollapsed
                />
                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexA, color: invertHex(hexA) }}
                    >
                        Alice
                    </span>
                    's Geheimfarbe
                </div>
            </div>
            <div className={clsx(styles.PUB)}>
                <ColorPicker
                    className={styles.colorPicker}
                    hue={colorS}
                    onInput={(h) => setColorS(h)}
                    initiallyCollapsed
                />
                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexS, color: invertHex(hexS) }}
                    >
                        Öffentlich
                    </span>{' '}
                    
                </div>
            </div>
            <div className={clsx(styles.EVE)} style={{height: '200px'}}>
                Eve 🕶
            </div>
            <div className={clsx(styles.B)}>
                <ColorPicker
                    className={styles.colorPicker}
                    hue={colorB}
                    onInput={(h) => setColorB(h)}
                    initiallyCollapsed
                />

                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexB, color: invertHex(hexB) }}
                    >
                        Bob
                    </span>
                    's Geheimfarbe
                </div>
            </div>
            <div className={clsx(styles.MIXA, styles.mixed)}>
                <div className={styles.colorBucket} style={{ background: mixAS }} />
                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexA, color: invertHex(hexA) }}
                    >
                        Alice
                    </span>
                    <span>+</span>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexS, color: invertHex(hexS) }}
                    >
                        Öffentlich
                    </span>
                </div>
            </div>
            <div className={clsx(styles.MIXB, styles.mixed)}>
                <div className={styles.colorBucket} style={{ background: mixBS }} />
                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexS, color: invertHex(hexS) }}
                    >
                        Öffentlich
                    </span>
                    <span>+</span>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexB, color: invertHex(hexB) }}
                    >
                        Bob
                    </span>
                </div>
            </div>
            <div className={clsx(styles.PRIVA, styles.mixed)}>
                <div className={styles.colorBucket} style={{ background: mixAPrivate }} />
                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexA, color: invertHex(hexA) }}
                    >
                        Alice
                    </span>
                    <span>+</span>
                    <span
                        className="badge badge--secondary"
                        style={{ background: mixBS, color: invertHex(mixBS) }}
                    >
                        Mischung
                    </span>
                </div>
            </div>
            <div className={clsx(styles.PRIVB, styles.mixed)}>
                <div className={styles.colorBucket} style={{ background: mixBPrivate }} />
                <div className={clsx(styles.caption)}>
                    <span
                        className="badge badge--secondary"
                        style={{ background: mixAS, color: invertHex(mixAS) }}
                    >
                        Mischung
                    </span>
                    <span>+</span>
                    <span
                        className="badge badge--secondary"
                        style={{ background: hexB, color: invertHex(hexB) }}
                    >
                        Bob
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ColorExchange;
