import { IPerson } from '../base';

export interface IProfessionalInformation extends IPerson {
  about: string;
  evaluation: {
    stars: number;
    reviews: number;
  };
  languages: string[];
  register: string;
  session: {
    price: string;
    duration: number;
  };
  state: string;
}
