import App from '../App';

describe('App', () => {
    let component;


    beforeEach(() => {
        component = shallow(<App />);
    });

    test('checks components exist', () => {
        const header = component.find('Header');
        const footer = component.find('Footer');
        const switcher = component.find('Switch');
        expect(header.exists()).toBe(true);
        expect(footer.exists()).toBe(true);
        expect(switcher.exists()).toBe(true);
    });

});