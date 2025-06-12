export interface NSAData {
    date:            Date;
    explanation:     string;
    hdurl:           string;
    media_type:      string;
    service_version: string;
    title:           string;
    url:             string;
}

export interface GeoStormData {
    gstID:          string;
    startTime:      string;
    allKpIndex:     AllKpIndex[];
    link:           string;
    linkedEvents:   LinkedEvent[];
    submissionTime: string;
    versionId:      number;
}

export interface AllKpIndex {
    observedTime: string;
    kpIndex:      number;
    source:       string;
}

export interface LinkedEvent {
    activityID: string;
}
