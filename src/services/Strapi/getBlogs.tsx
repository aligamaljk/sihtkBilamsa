import axios from 'axios';
// axios.defaults.baseURL = import.meta.env.VITE_STRAPI_BASE_URL;

export async function getBlogs() {
  const res = await axios
    .get(
      `${import.meta.env.VITE_STRAPI_BASE_URL}/blogs?populate=*&fields[0]=title&fields[1]=introduction`,
      {
        headers: {
          Authorization: import.meta.env.VITE_TOKEN_USER
        }
      }
    )
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((e) => {
      console.error(e.message);
      return null;
    });

  return res;
}

export async function getSpecificBlog(id: number) {
  await axios
    .get(
      `${import.meta.env.VITE_STRAPI_BASE_URL}/blogs?populate[0]=coverPhoto&filters[id][$in][0]=${id}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_TOKEN_USER
        }
      }
    )
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((e) => {
      console.error(e.message);
      return null;
    });
}
