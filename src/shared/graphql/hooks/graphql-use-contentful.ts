import { useState, useEffect } from "react";

export function useGraphQLContentful<T>(query: string) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    try {
      window.fetch(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}?access_token=${import.meta.env.VITE_CONTENTFUL_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_API_KEY}`
        },
        body: JSON.stringify({ query }),
      })
        .then((res) => res.json())
        .then((json) => {
          setData(json.data);
          setLoading(false);
        })
    } catch (error) {
      setLoading(false);
      setError(true);
      throw new Error(`Error on fetch data, with error: ${JSON.stringify(error)}`);
    }
  }, [])

  return {
    data,
    loading,
    error
  }

}