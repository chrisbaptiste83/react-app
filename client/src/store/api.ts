import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  TacticalPackage,
  PrimaryWeapon,
  SecondaryWeapon,
  LethalWeapon,
  TacticalItem,
} from '../types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['TacticalPackage', 'PrimaryWeapon', 'SecondaryWeapon', 'LethalWeapon', 'TacticalItem'],
  endpoints: (builder) => ({
    // Tactical Packages
    getTacticalPackages: builder.query<TacticalPackage[], void>({
      query: () => '/tactical_packages',
      providesTags: ['TacticalPackage'],
    }),
    getTacticalPackage: builder.query<TacticalPackage, number>({
      query: (id) => `/tactical_packages/${id}`,
      providesTags: ['TacticalPackage'],
    }),
    addTacticalPackage: builder.mutation<TacticalPackage, Partial<TacticalPackage>>({
      query: (body) => ({
        url: '/tactical_packages',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TacticalPackage'],
    }),
    deleteTacticalPackage: builder.mutation<void, number>({
      query: (id) => ({
        url: `/tactical_packages/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TacticalPackage'],
    }),

    // Primary Weapons
    getPrimaryWeapons: builder.query<PrimaryWeapon[], void>({
      query: () => '/primary_weapons',
      providesTags: ['PrimaryWeapon'],
    }),
    addPrimaryWeapon: builder.mutation<PrimaryWeapon, Partial<PrimaryWeapon>>({
      query: (body) => ({
        url: '/primary_weapons',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PrimaryWeapon'],
    }),

    // Secondary Weapons
    getSecondaryWeapons: builder.query<SecondaryWeapon[], void>({
      query: () => '/secondary_weapons',
      providesTags: ['SecondaryWeapon'],
    }),
    addSecondaryWeapon: builder.mutation<SecondaryWeapon, Partial<SecondaryWeapon>>({
      query: (body) => ({
        url: '/secondary_weapons',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['SecondaryWeapon'],
    }),

    // Lethal Weapons
    getLethalWeapons: builder.query<LethalWeapon[], void>({
      query: () => '/lethal_weapons',
      providesTags: ['LethalWeapon'],
    }),
    addLethalWeapon: builder.mutation<LethalWeapon, Partial<LethalWeapon>>({
      query: (body) => ({
        url: '/lethal_weapons',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['LethalWeapon'],
    }),

    // Tactical Items
    getTacticalItems: builder.query<TacticalItem[], void>({
      query: () => '/tactical_items',
      providesTags: ['TacticalItem'],
    }),
    addTacticalItem: builder.mutation<TacticalItem, Partial<TacticalItem>>({
      query: (body) => ({
        url: '/tactical_items',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TacticalItem'],
    }),
  }),
})

export const {
  useGetTacticalPackagesQuery,
  useGetTacticalPackageQuery,
  useAddTacticalPackageMutation,
  useDeleteTacticalPackageMutation,
  useGetPrimaryWeaponsQuery,
  useAddPrimaryWeaponMutation,
  useGetSecondaryWeaponsQuery,
  useAddSecondaryWeaponMutation,
  useGetLethalWeaponsQuery,
  useAddLethalWeaponMutation,
  useGetTacticalItemsQuery,
  useAddTacticalItemMutation,
} = api
