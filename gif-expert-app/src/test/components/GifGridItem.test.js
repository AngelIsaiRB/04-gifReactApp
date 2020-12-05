import React from 'react';
import  { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('test en el componete de gidGridItem', () => {

    test('should de mostrtar el componente correctamente', () => {
            let wrapper = shallow(<GifGridItem/>);
            expect(wrapper).toMatchSnapshot();
    })
    
    
})
