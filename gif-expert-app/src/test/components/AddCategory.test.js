const { AddCategory } = require("../../components/AddCategory");
import { shallow } from 'enzyme';
import React, { PureComponent } from 'react'


describe('pruebas en AddCategory', () => {
    // const wrapper = 
    const setCategories=jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} /> );

    beforeEach(()=>{
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories} /> );
    });

    test('should de de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should simular cuando la caja de texto cambia', () => {
        const input = wrapper.find("input");
        const value= "Holamundo";
        input.simulate("change",{target:{value:value}});
        expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test('should No debe de posterar la informacin con submit', () => {
        wrapper.find("form").simulate("submit",{
            preventDefault(){}
        });
        expect(setCategories).not.toHaveBeenCalled();
        
    })
    
    
});
