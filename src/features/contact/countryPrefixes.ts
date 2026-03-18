export interface CountryPrefix {
  code: string;
  label: string;
  prefix: string;
}

export const countryPrefixes: CountryPrefix[] = [
  { code: "PT", label: "Portugal", prefix: "+351" },
  { code: "ES", label: "España", prefix: "+34" },
  { code: "FR", label: "France", prefix: "+33" },
  { code: "DE", label: "Deutschland", prefix: "+49" },
  { code: "NL", label: "Nederland", prefix: "+31" },
  { code: "IT", label: "Italia", prefix: "+39" },
  { code: "GB", label: "United Kingdom", prefix: "+44" },
  { code: "BE", label: "Belgique", prefix: "+32" },
  { code: "CH", label: "Schweiz", prefix: "+41" },
  { code: "AT", label: "Österreich", prefix: "+43" },
  { code: "BR", label: "Brasil", prefix: "+55" },
  { code: "US", label: "United States", prefix: "+1" },
  { code: "CA", label: "Canada", prefix: "+1" },
  { code: "MX", label: "México", prefix: "+52" },
  { code: "AR", label: "Argentina", prefix: "+54" },
  { code: "LU", label: "Luxembourg", prefix: "+352" },
  { code: "OTHER", label: "Otro", prefix: "" },
];
