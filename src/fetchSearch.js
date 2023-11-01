const fetchSearch = async ({ queryKey }) => {
  const { animal, breed, location } = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!apiRes.ok) {
    throw new Error("pets not fetched");
  }

  return apiRes.json();
};

export default fetchSearch;
