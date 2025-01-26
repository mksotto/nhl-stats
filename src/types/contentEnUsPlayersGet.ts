export interface ContentEnUsPlayersGet {
    pagination: Pagination;
    meta:       Meta;
    items:      Item[];
}

export interface Pagination {
    maxItems: number;
}

export interface Meta {
    apiVersion:  string;
    generatedAt: Date;
}

export interface Item {
    type:            string;
    _translationId:  string;
    _entityId:       string;
    selfUrl:         string;
    slug:            string;
    title:           string;
    tags:            Tag[];
    fields:          ItemFields;
    createdBy:       string;
    lastUpdatedBy:   string;
    lastUpdatedDate: Date;
    contentDate:     Date;
    featured:        number;
    entityCode:      string;
}

export interface Tag {
    _translationId:          string;
    _entityId:               string;
    selfUrl:                 string;
    title:                   string;
    slug:                    string;
    neutralSlug:             string;
    externalSourceName:      string;
    externalSourceReference: ExternalSourceReference;
    extraData:               ExtraData;
    fields:                  TagFields;
}

export interface ItemFields {
    homebaseId: string;
    playerId:   string;
    biography:  string;
}

export interface ExternalSourceReference {
    SourceId:   string;
    SourceName: string;
}

export interface ExtraData {
    playerId: string;
}

export interface TagFields {
}