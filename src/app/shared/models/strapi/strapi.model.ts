export interface StrapiEntity<Type> {
  id: number|null;
  attributes: Type
  meta?: Object
}

export interface StrapiResponse<Type> {
  data: StrapiEntity<Type>[]|StrapiEntity<Type>;
  meta: Object;
  error?: Object
}
