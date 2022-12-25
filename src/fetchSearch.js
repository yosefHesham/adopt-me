const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];
  console.log("a7a");
  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!res.ok) {
    throw new Error("Pet fetch not okay");
  }

  return res.json();
};

export default fetchSearch;
