import { StatusCharTypes, GenderCharTypes } from './Filters.interfaces';

export const StatusesSelect = [
  { value: StatusCharTypes.ALIVE, option: 'Жив' },
  { value: StatusCharTypes.DEAD, option: 'Мертв' },
  { value: StatusCharTypes.UNKNOWN, option: 'Неизвестно' },
];

export const GenderSelect = [
  { value: GenderCharTypes.MALE, option: 'Мужской' },
  { value: GenderCharTypes.FEMALE, option: 'Женский' },
  { value: GenderCharTypes.GENDERLESS, option: 'Бесполый' },
  { value: GenderCharTypes.UNKNOWN, option: 'Неизвестно' },
];
