export const queryShoesCollection = `
  query {
    shoesCollection {
      items {
        name
        price
      }
    }
  }
`;

export const queryShoeById = (id:string) => `
  query {
    shoes(id: "${id}") {
      name
      price
      description
      link
      image {
        title
        url
      }
    }
  }
`;