import axios from "axios";

export const getAllHomePage = async () => {
  const result = await axios
    .get("https://jsonplaceholder.typicode.com/users", {
      params: {
        _limit: 3,
      },
    })
    .then((response) => response);
  return result;
};
