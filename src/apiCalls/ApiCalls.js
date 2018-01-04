const fetchHouses = async () => {
  const houseFetch = await fetch('http://localhost:3001/api/v1/houses')
  return await houseFetch.json()

}

// const fetchSwornMembers = async (members) => {
//   const swornMembersData = members.map(aysnc (url) => {
//     const fetchSworn = await fetch(`http://localhost:3001/api/v1/character`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ url: url })
//     })
//     const fetchedSwornData = fetchSworn.json();
//     return fetchedSwornData;
//   })
//   return Promise.all(swornMembersData)
// }

export default { fetchHouses };
