export interface Certification {
  name: string;
  issuer: string;
  code: string;
  year: number;
}

export const CERTIFICATIONS: Certification[] = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft', code: 'AZ-900', year: 2024 },
];
