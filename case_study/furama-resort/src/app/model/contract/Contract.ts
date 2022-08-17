import {Customer} from '../customer/Customer';
import {Facility} from '../facility/Facility';

export interface Contract {
  id ?: number;
  code ?: string;
  customerId ?: Customer;
  facilityId ?: Facility;
  dayStart ?: string;
  dayEnd ?: string;
  deposit ?: number;
}
