import counterReducer, {
    fn,
  } from './counterSlice';
  
  describe('counter reducer', () => {
    const initialState = {
    };
    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
        value: 0,
        status: 'idle',
      });
    });
  
    it('should handle fn', () => {
      const actual = counterReducer(initialState, fn());
    });
  
  });
  