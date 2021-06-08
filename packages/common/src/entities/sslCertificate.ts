export interface ISslCertificate {
  id: number;
  sans: string;
  expiry?: Date;
}
