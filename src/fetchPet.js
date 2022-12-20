const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiResp = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiResp.ok) {
    throw new Error(`details/${id} fetch not okay`);
  }
  return apiResp.json();
};
export default fetchPet;
