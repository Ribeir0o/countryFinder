export type Filters = {
    filterName: string;
    filterRegion: string;
}
  
export type Country = {  
    name: {common:string};
    region: string;
    capital: string;
    population: number;
    flags: {svg: string}
}