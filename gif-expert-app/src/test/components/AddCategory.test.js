const { AddCategory } = require("../../components/AddCategory");
import { shallow } from 'enzyme';
import React, { PureComponent } from 'react'


describe('pruebas en AddCategory', () => {
    // const wrapper = 
    const setCategories=()=>{

    };


    test('should de de mostrarse correctamente', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories} /> );
        expect(wrapper).toMatchSnapshot();
    });
    
});
