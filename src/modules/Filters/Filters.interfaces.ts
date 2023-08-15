export enum StatusCharTypes {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

export enum GenderCharTypes {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

export interface ParamsSearch {
  name: string;
  species: string;
  gender: GenderCharTypes;
  status: StatusCharTypes;
}
