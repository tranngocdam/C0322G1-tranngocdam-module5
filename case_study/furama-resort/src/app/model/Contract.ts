import {Customer} from './Customer';
import {Facility} from './Facility';

export interface Contract {
  id ?: number;
  code ?: string;
  customerId ?: Customer;
  facilityId ?: Facility;
  dayStart ?: string;
  dayEnd ?: string;
  deposit ?: number;
}
