import TodayHabits from '.'

describe('TodaysHabits', () => {
    let component;
    let wrapper;
    beforeEach(() => {
     var wrapper = shallow( < TodayHabits / > );
    });
    test('it exists', () => {
      expect(wrapper).toExist;
    });
    test('it contains an p tag', () => {
      const p = wrapper.find("p");
      expect(p.text()).toBe('this is display habits');
    });
  });