import navBar from '.'

describe('tests the Navbar', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavBar />)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    it('renders navlinks to 2 pages', () => {
        let navLinks = wrapper.find('NavLink')
        expect(navLinks.length).toBe(2)
    });

    test('the Navlink has the correct path', () => {
        const path = wrapper.find('.apple');
        expect(path.prop('to')).toEqual('//dashboard/today');
    });

    test('the Navlink has the correct path', () => {
        const path = wrapper.find('.achieve');
        expect(path.prop('to')).toEqual('/dashboard/achievements');
    });

});
