export type Shoes = {
  name: string;
  description: string;
  price: number;
  avatar: string;
}

export type Metadata = {
  tags: any[];
}

export type Sys2 = {
  type: string;
  linkType: string;
  id: string;
}

export type Space = {
  sys: Sys2;
}

export type Sys3 = {
  id: string;
  type: string;
  linkType: string;
}

export type Environment = {
  sys: Sys3;
}

export type Sys = {
  space: Space;
  type: string;
  id: string;
  revision: number;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  locale: string;
}

export type Image2 = {
  width: number;
  height: number;
}

export type Details = {
  size: number;
  image: Image2;
}

export type File = {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export type Fields2 = {
  title: string;
  description: string;
  file: File;
}

export type Image = {
  metadata: Metadata;
  sys: Sys;
  fields: Fields2;
}

export type Fields = {
  name: string;
  description: string;
  image: Image;
  price: number;
}

export type Sys4 = {
  id: string;
  type: string;
}

export type RootObject = {
  fields: Fields;
  sys: Sys4;
}


