let shallow = require('enzyme/shallow'),
    appModule = require('../Input'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
  it("Input should have a handleUserInput function.", function () {
    let wrapper = shallow(<TestedComponent />);
    expect(typeof wrapper.instance().handleUserInput).to.equal('function');
  });
  it("In Input.js, <input /> should have an attribute of onChange={this.handleUserInput}.", function () {
    let wrapper = shallow(<TestedComponent />);
    expect(wrapper.find('input').props().onChange).to.equal(wrapper.instance().handleUserInput);
  });
  it("handleUserInput should call this.setState({ userInput: e.target.value }).", function () {
    let wrapper = shallow(<TestedComponent />);
    wrapper.setState({ userInput: 'Hey' });
    expect(wrapper.state().userInput).to.equal('Hey');
    wrapper.instance().handleUserInput({
    	target: { value: 'Yo' }
    });
    expect(wrapper.state().userInput).to.equal('Yo');
  });
  it("Input's initial state should be { userInput: '' }.", function () {
    let wrapper = shallow(<TestedComponent />);
    expect(wrapper.state()).to.eql({ userInput: '' });
  });
  it("In Input's render function, the <input /> should have an attribute of value={this.state.userInput}.", function () {
    let wrapper = shallow(<TestedComponent />);
    expect(wrapper.find('input').props().value).to.equal(wrapper.state().userInput);
