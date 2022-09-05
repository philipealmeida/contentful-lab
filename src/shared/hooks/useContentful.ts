import { createClient, Entry } from "contentful"

type Shoes = {
  name: string;
  description: string;
  price: number;
  avatar: string;
}
export const useContentful = () => {
  const client = createClient({
    space: `${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`,
    accessToken: `${import.meta.env.VITE_CONTENTFUL_API_KEY}`,
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = client.getEntries({
        content_type: "firstContent",
        select: "fields",
      })
      return entries;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  const getShoes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "shoes",
        select: "fields",
      })
      const sanitize = entries.items.map((item) =>  {
        const avatar = item.fields.image.fields.file.url;
        const { name, description, price } = item.fields;
        return {
          name,
          description,
          price,
          avatar
        } as Shoes;
      });
      return sanitize;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  };

  return {
    client,
    getAuthors,
    getShoes
  };
};