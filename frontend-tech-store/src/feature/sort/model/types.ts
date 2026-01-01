export type SortOrder = 'asc' | 'desc';

// export type SortField = 'price' | 'title' | 'rating';
export type SortField = 'price' ;


export interface SortParams {
  sortBy: SortField;
  order: SortOrder;
}

export interface SortOption {
  value: string;
  label: string;
  sortBy: SortField;
  order: SortOrder;
}
