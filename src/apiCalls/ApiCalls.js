const fetchHouses = async () => {
  const houseFetch = await fetch('http://localhost:3001/api/v1/houses')
  return await houseFetch.json()

}

const fetchMembers = async (swornMembers) => {
 const allMembers = swornMembers.map(async (url) => {
   const fetchData = await fetch('http://localhost:3001/api/v1/character', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ url: url })
   })
   const fetchStuff = fetchData.json()
   return fetchStuff
 });
 return Promise.all(allMembers);
};

export default { fetchHouses, fetchMembers };
