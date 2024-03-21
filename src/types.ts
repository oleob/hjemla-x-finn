export interface HjemlaResponse {
  success: boolean;
  response: HjemlaEntry[];
}

export interface HjemlaEntry {
  id: string;
  type: string;
  city: string;
  letter: string;
  postCode: string;
  lat: number;
  lng: number;
  display: string;
  verbose: string;
  slug: string;
  area: string;
  municipality_name: string;
  municipality_slug: string;
  kommunenr: number;
  street_id: any;
  street: string;
  street_slug: string;
  number: number;
  matrikkel: Matrikkel;
  postal_area_name: string;
  postal_area_slug: string;
}

export interface Matrikkel {
  kommunenr: number;
  gardsnr: number;
  bruksnr: number;
  festenr: number;
}
