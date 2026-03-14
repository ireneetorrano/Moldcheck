declare module "../../app/*" {
  const defaultExport: (...args: any[]) => any;
  export default defaultExport;
  export const generateMetadata: any;
  export const generateStaticParams: any;
  export const revalidate: any;
  export const dynamic: any;
  export const dynamicParams: any;
  export const fetchCache: any;
  export const runtime: any;
  export const preferredRegion: any;
  export const maxDuration: any;
  export const metadata: any;
}

declare module "../../app/api/*" {
  export const GET: any;
  export const POST: any;
  export const PUT: any;
  export const PATCH: any;
  export const DELETE: any;
  export const HEAD: any;
  export const OPTIONS: any;
  export const runtime: any;
  export const preferredRegion: any;
  export const maxDuration: any;
}
