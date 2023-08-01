export interface Project {
    id: number,
    name: string,
    description: string,
    url?: string, // optional url field as not all projects will have a url to link to
}