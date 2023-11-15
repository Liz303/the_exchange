import { createClient } from "contentful";

const previewParams = {
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN,
  host: "preview.contentful.com",
};

const prodParams = {
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
};

const prod = process.env.NODE_ENV === "production";

export const client = createClient(prod ? prodParams : previewParams);

export const getPage = async (id) => {
  const query = {
    include: 10,
  };
  const response = await client.getEntry(id, query);
  return response || null;
};
