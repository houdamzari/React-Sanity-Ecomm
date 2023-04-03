import  sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
  projectId: "q6yj1lm6", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2023-04-02',
  useCdn: true,
  token: process.env.REACT_SANITY_PUBLIC_TOKEN
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);