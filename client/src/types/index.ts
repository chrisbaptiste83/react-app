// Type definitions for the application

export interface TacticalPackage {
  id: number
  title: string
  description?: string
  creator?: string
  primary_weapon?: PrimaryWeapon
  secondary_weapon?: SecondaryWeapon
  lethal_weapon?: LethalWeapon
  tactical_item?: TacticalItem
  created_at?: string
  updated_at?: string
}

export interface PrimaryWeapon {
  id: number
  name: string
  description?: string
  created_at?: string
  updated_at?: string
}

export interface SecondaryWeapon {
  id: number
  name: string
  description?: string
  created_at?: string
  updated_at?: string
}

export interface LethalWeapon {
  id: number
  name: string
  description?: string
  created_at?: string
  updated_at?: string
}

export interface TacticalItem {
  id: number
  name: string
  description?: string
  created_at?: string
  updated_at?: string
}
