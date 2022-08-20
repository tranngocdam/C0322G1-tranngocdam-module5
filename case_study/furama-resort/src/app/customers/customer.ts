import {CustomerType} from '../customers/CustomerType';

export interface Customer {
  id ?: number;
  customerTypeId ?: CustomerType;
  name ?: string;
  dayOfBirth ?: string;
  gender ?: boolean;
  idCard ?: string;
  phoneNumber ?: string;
  email ?: string;
  address ?: string;
}
