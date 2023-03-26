export interface IEnergyData {
  authorization_uid: string;
  base: IBase;
  blocks: string[];
  created: string;
  line_items: ILineItems;
  meter_uid: string;
  notes: string[];
  sources: ISources[];
  tiers: ITiers[];
  uid: number;
  updated: string;
  utility: string;
}

export interface IBase {
  bill_end_date: string;
  bill_start_date: string;
  bill_statement_date: string;
  bill_total_cost: number;
  bill_total_kwh: number;
  bill_total_unit: string;
  bill_total_volume: number;
  billing_account: string;
  billing_address: string;
  billing_contact: string;
  meter_numbers: string[];
  service_address: string;
  service_class: string;
  service_identifier: string;
  service_tariff: string;
}

export interface ILineItems {
  cost: number;
  end: string;
  kind: string;
  name: string;
  rate: number;
  start: string;
  unit: string;
  volume: number;
}

export interface ISources {
  raw_url: string;
  type: string;
}

export interface ITiers {
  cost: number;
  level: number;
  name: string;
  unit: string;
  volume: number;
}
