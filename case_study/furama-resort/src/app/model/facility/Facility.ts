import {RentType} from './RentType';
import {FacilityType} from './FacilityType';

export interface Facility {
  id ?: number;
  name ?: string;
  area ?: number;
  cost ?: string;
  maxPeople ?: number;
  rentTypeid ?: RentType;
  facilityTypeId ?: FacilityType;
  standardRoom ?: string;
  descriptionOtherConvenience ?: string;
  poolArea ?: number;
  numberOfFloods ?: number;
  facilityFree ?: string;
}
