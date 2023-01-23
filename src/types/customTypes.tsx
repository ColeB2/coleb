
interface techDataType {
    id: number;
    name: string;
    order: number;
}

interface techObjectType {
    id: number;
    title: string;
    data: projectType[];
}

interface projectType {
    id: number;
    title: string;
    description: string;
    image: string;
    start_date: string;
    end_date: string;
    github: string;
    link: string;
    order: number;
    technologies: string[];
    pinned: boolean;

}

interface APICallType {
    _count: number;
    _items: projectType[];
    _last: boolean;

}

export type {APICallType, projectType, techDataType, techObjectType}