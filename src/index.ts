import { isPhone } from './lib/phone';
import { isSafePassword, isMediumPassword, isStrongPassword } from './lib/password';
import { isNumber } from './lib/number';
import { isCPF } from './lib/cpf';
import { isCNPJ } from './lib/cnpj';
import { isJson } from './lib/json';
import { isEmail } from './lib/email';
import { isDateString } from './lib/dateString';
import { isTime } from './lib/time';
export { isAddress } from './lib/isAddress';

const isString = (value: any): boolean => typeof value === 'string';
const isBoolean = (value: any): boolean => typeof value === 'boolean';
const isObject = (value: any): boolean => typeof value === 'object';

export type SyncisType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'object'
  | 'phone'
  | 'safePassword'
  | 'mediumPassword'
  | 'strongPassword'
  | 'cpf'
  | 'cnpj'
  | 'json'
  | 'email'
  | 'dateString'
  | 'time';

const validations: { [key in SyncisType]: (value: any) => boolean } = {
  string: isString,
  number: (value: any): boolean => isNumber(value),
  boolean: isBoolean,
  object: isObject,
  phone: (value: any): boolean => isPhone(value),
  safePassword: (value: any): boolean => isSafePassword(value),
  mediumPassword: (value: any): boolean => isMediumPassword(value),
  strongPassword: (value: any): boolean => isStrongPassword(value),
  cpf: (value: any): boolean => isCPF(value),
  cnpj: (value: any): boolean => isCNPJ(value),
  json: (value: any): boolean => isJson(value),
  email: (value: any): boolean => isEmail(value),
  dateString: (value: any): boolean => isDateString(value),
  time: (value: any): boolean => isTime(value),
};

export const is = (value: any, type: SyncisType) => {
  if ((!value && value !== false) || !type) {
    return false;
  }
  const validate = validations[type];
  if (!validate) {
    return false;
  }
  return validate(value);
};
