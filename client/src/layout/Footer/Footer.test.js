
import Footer from '.';

describe('tests the footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('the footer copyright should be correct', () => {
        const names = wrapper.find('#footer');
        expect(names.text()).toBe(' © Created by charan,kai,stelios & Tara');
    });
    
  
});