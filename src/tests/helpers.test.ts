import { deleteObjectProperty } from 'shared/helpers/utils';

describe('Testing utils', () => {
    const testObj = {
        firstProp: '1',
        secondProp: '2',
    };

    test('test deleteObjectProperty do not have deleted property, and to have deleted property', () => {
        // positive case
        expect(deleteObjectProperty(testObj, 'firstProp')).toHaveProperty(
            'secondProp',
            '2'
        );
        // negative case
        expect(deleteObjectProperty(testObj, 'firstProp')).not.toHaveProperty(
            'firstProp'
        );
    });
});
