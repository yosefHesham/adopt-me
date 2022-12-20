const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const apiResp = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiResp.ok) {
    throw new Error(`details/${animal} fetch not okay`);
  }
  return apiResp.json();
};
export default fetchBreedList;
