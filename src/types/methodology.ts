export interface DatasetItem {
  label: string;
  description: string;
}

export interface Metric {
  label: string;
  value: number;
}

export interface DatasetStep {
  title: string;
  items: DatasetItem[];
}

export interface ResultsStep {
  title: string;
  metrics: Metric[];
}

export type MethodologySteps = [DatasetStep, ResultsStep];