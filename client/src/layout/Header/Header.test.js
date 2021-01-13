import Header from "."

describe('tests for header', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    test('it exists', () => {
        expect(wrapper).toExist;
    });
    test('it contains an h1', () => {
        const h1 = wrapper.find('h1');
        expect(h1.text()).toBe('HabiTrack');
    });


});