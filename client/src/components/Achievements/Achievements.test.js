import Achievements from '.'

describe('Achievement', () => {
    let component;
    beforeEach(() => {
        wrapper = shallow(<Achievements />);
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });
    test('it contains an h1', () => {
        const h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Achievements page!');
    });

});

