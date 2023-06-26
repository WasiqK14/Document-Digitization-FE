export const postRequest = async (url, data) => {
  return await fetch(url, {
    method: "POST",
    body: data,
    redirect: "follow",
  }).then((res) => {
    return res.json();
  });
};
