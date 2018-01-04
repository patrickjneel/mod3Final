const fetchHouses = async () => {
  const houseFetch = await fetch('http://localhost:3001/api/v1/houses')
  return await houseFetch.json()

}

export default { fetchHouses };
