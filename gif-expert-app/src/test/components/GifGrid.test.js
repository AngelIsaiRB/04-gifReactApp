const { GifGrid } = require("../../components/GifGrid");
import React from 'react'
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe("pruebas dentro de gifGrid",  ()=>{
    const category="hola world";

    test('should de hacr match con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data    : [],
            loading :true,
        });

        const wrapper = shallow(<GifGrid   category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should debe de mostrar items cuando carga imagenes useFetchsGisf', () => {
        const gifs =[{
            id:"ABC",
            url:"Https://localhostfnsofbsofudnf",
            title: "xx nada xx"
        }]
        useFetchGifs.mockReturnValue({
            data    : gifs,
            loading :false,
        });
        const wrapper = shallow(<GifGrid   category={category}/>);
        
        expect(wrapper).toMatchSnapshot();

    });
    
    

});

