import React from 'react';

export default function useStatePromise<S>(
    initialValue: S
): [S, (promise: Promise<S>) => Promise<void>] {
    const [state, setState] = React.useState<S>(initialValue);
    const asyncCount: React.MutableRefObject<number> = React.useRef(0);

    async function setStatePromise(
        nextValuePromise: Promise<S>
    ): Promise<void> {
        // eslint-disable-next-line no-plusplus
        const currCount: number = ++asyncCount.current;
        const nextValue: S = await nextValuePromise;
        if (currCount === asyncCount.current) {
            setState(nextValue);
        }
    }

    // Cancel any async call when unmount.
    React.useEffect(
        () => () => {
            // eslint-disable-next-line no-plusplus
            asyncCount.current++;
        },
        []
    );

    return [state, setStatePromise];
}
