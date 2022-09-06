import { createClient } from "contentful"
import { Shoes, Fields } from "../types";

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

  function getFileUrl(fields: Fields): string {
      return fields.image.fields.file.url;;
  }

  const getShoes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "shoes",
        select: "fields",
      });
      const sanitizedShoes = entries.items.map((item) => {
        const { name, description, price } = item.fields as Fields;
        return {
          name,
          description,
          price,
          avatar: getFileUrl((item.fields) as Fields)
        } as Shoes;
      });
      return sanitizedShoes;
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