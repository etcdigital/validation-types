import { is } from '../';

type IIsAddressInvalid = 'all' | 'place' | 'complement' | 'district' | 'city' | 'state' | 'country';

interface IIsAddress {
  valid: boolean;
  invalid?: IIsAddressInvalid;
}

export const stringSize = (value: string, minSize = 3, maxSize = 63): boolean => {
  if (!value) {
    return false;
  }
  if (value.length < minSize || value.length > maxSize) {
    return false;
  }
  return true;
};

const isInvalid = (invalid?: IIsAddressInvalid): IIsAddress => ({ invalid, valid: false });
const isObjectInvalid = (obj: any) => !obj || !is(obj).object();
const isPlaceInvalid = (place: any) => place === '' || !is(place).string();
const isComponentInvalid = (complement: any) => complement && !stringSize(complement, 1, 30);
const isDistrictInvalid = (district: any) => district === '' || !is(district).string();
const isCityInvalid = (city: any) => city === '' || !is(city).string();
const isStateInvalid = (state: any) => state === '' || !is(state).string() || !stringSize(state, 2);

export const isAddress = (data: any): IIsAddress => {
  if (isObjectInvalid(data)) {
    return isInvalid('all');
  }
  if (isPlaceInvalid(data.place)) {
    return isInvalid('place');
  }
  if (isComponentInvalid(data.complement)) {
    return isInvalid('complement');
  }
  if (isDistrictInvalid(data.district)) {
    return isInvalid('district');
  }
  if (isCityInvalid(data.city)) {
    return isInvalid('city');
  }
  if (isStateInvalid(data.state)) {
    return isInvalid('state');
  }
  if (!is(data.country).number()) {
    return isInvalid('country');
  }
  return { valid: true };
};
