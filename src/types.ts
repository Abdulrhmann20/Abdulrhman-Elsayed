export type ThemeMode = 'dark' | 'light';

export interface IndustrySolution {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  recommendedModules: string[];
  keyBenefits: string[];
  zatcaCompliance: boolean;
  kpiHighlight: string;
  clientExample?: string;
}

export interface OdooModule {
  id: string;
  name: string;
  category: 'core' | 'operations' | 'finance' | 'productivity';
  icon: string;
  description: string;
  saudiFeature: string;
  popularWith: string[];
}

export interface ServicePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface TransformationStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface SuccessPartner {
  name: string;
  category: string;
  outcome: string;
  logoText: string;
}

export interface CalculatorState {
  industry: string;
  teamSize: number;
  currentSystem: string;
  selectedModules: string[];
  needsZatca: boolean;
  needsCustomDev: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  industry: string;
  teamSize: string;
  currentSystem: string;
  notes: string;
}
