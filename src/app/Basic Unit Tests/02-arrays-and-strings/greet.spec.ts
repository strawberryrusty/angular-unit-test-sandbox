import { greet } from "./greet";


describe('greet', ()=> {
  it('should including the name in the message', ()=> {
    const result = greet('prash');

    expect(result).toContain(result);
  })
})
// import { greet } from './greet';
// describe('greet', () => {
//     it('should include the name in the message', () => {
//         expect(greet('Bryce')).toContain('Bryce');
//     });
// });
