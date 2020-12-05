// import { shallow } from 'enzyme';
// import React from 'react';
import { getGifs } from '../../helpers/getGifs';

describe('pruebas con getGifs fecth', () => {
        
    test('should de traer 10 elementos', async() => {
       const gifs = await getGifs("one punch");
       expect(gifs.length).toBe(10);
    });
    test('should de traer validad que no viene nada', async() => {
       const gifs = await getGifs("");
       expect(gifs.length).toBe(0);
    });
    
    
})
