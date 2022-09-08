import { createClient } from "contentful"
import { Shoes, Fields, Sys4 } from "../types";

export const useContentful = () => {
  const client = createClient({
    space: `${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`,
    accessToken: `${import.meta.env.VITE_CONTENTFUL_API_KEY}`,
    host: "preview.contentful.com"
  });

  function getFileUrl(fields: Fields): string {
    return fields.image.fields.file.url;;
  }

  function getId(sys: Sys4): string {
    return sys.id;
  }

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
      });
      const sanitizedShoes = entries.items.map((item) => {
        const { name, description, price } = item.fields as Fields;
        return {
          name,
          description,
          price,
          id: getId(item.sys),
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