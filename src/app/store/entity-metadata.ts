import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = { 
  Fav: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Fav: 'Favs' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};