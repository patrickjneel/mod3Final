import ApiCalls from './ApiCalls';

describe('FetchHouses API Test', () => {

  beforeEach(() =>{
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
          {
            results: [{houses: 'Stark'}]
          }
        )
    }));
  });

  it('should fetch the house Data', async () => {
    const houses = await ApiCalls.fetchHouses();
    expect(houses).toEqual({"results": [{houses: 'Stark'}]})
  })

})
