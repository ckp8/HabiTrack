import App from '../App';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    })

    test('it renders', () => {
        expect(component.find('#App')).toHaveLength(1);
    })
})