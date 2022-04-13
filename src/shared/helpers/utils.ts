export const deleteObjectProperty = (object: any, property: string) => {
    const objectCopy = object;
    delete objectCopy[property];

    return objectCopy;
};
