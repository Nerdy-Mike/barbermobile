export interface ISpecialist {
  name: string;
  description: string;
  image: string;
  rating?: number;
  services?: IService[];
}

export interface IService {
  name: string;
  description: string;
  price: number;
}
