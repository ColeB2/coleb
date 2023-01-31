
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
    start_date: string | null;
    end_date: string | null;
    github: string | null;
    link: string | null;
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