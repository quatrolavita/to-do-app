export const deleteObjectProperty = (object: any, property: string) => {
    const objectCopy = object;
    delete objectCopy[property];

    return objectCopy;
};

export const getCookieByName = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;

    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts?.pop()?.split(';').shift();
    }
    return '';
};
