import { useState, useEffect } from "react";

export function useGraphQLContentful<T>(query: string) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}?access_token=${import.meta.env.VITE_CONTENTFUL_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_API_KEY}`
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((json) => setData(json.data))
  }, [])
  return { data }
}