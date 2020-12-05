import React from 'react';
import  { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('test en el componete de gidGridItem', () => {
    const title="un titulo";
    const url="https://unaimagen.jps";

    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should de mostrtar el componente correctamente', () => {
            expect(wrapper).toMatchSnapshot();
    });

    test('should de tener un parrafo con el titulo', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test('should de tener la imagen iugal al url y alt de los props', () => {
        const img = wrapper.find("img");
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test('should de conter animacion ', () => {
        const div=wrapper.find("div");
        const constain = (div.prop("className")).includes("animate");
        expect(constain).toBe(true);
    });
    
    
    
    
    
})
