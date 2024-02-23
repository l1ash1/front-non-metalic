import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';

type CollectionResponse = any | object;

export const materialsApi = createApi({
  reducerPath: 'materialsApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (build) => ({
    fetchMaterial: build.query<CollectionResponse[], { material: string }>({
      query: ({ material }) => ({
        url: `/materials/${material}`,
      }),
      transformResponse: (res: any) => res,
    }),
  }),
});
export const { useFetchMaterialQuery } = materialsApi;
