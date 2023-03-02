import { projectType } from "../types/customTypes"

export const PROJECT_DATA = [
    {
        id: 1,
        title: 'Project Name',
        description: 'Project description 1 here.',
        image: 'https://path.to/image1',
        start_date: null,
        end_date: null,
        github: 'https://path.to/github1',
        link: 'https://path.to/project1',
        order: 1,
        technologies: ['Python', 'Django', "JavaScript"],
        pinned: true
    },
    {
        id: 2,
        title: 'Project Name2',
        description: 'Project description 2 here.',
        image: 'https://path.to/image2',
        start_date: null,
        end_date: null,
        github: 'https://path.to/github2',
        link: null,
        order: 1,
        technologies: ['Python', 'Django', "JavaScript"],
        pinned: true
    },
    {
        id: 3,
        title: 'Project Name3',
        description: 'Project description 3 here.',
        image: 'https://path.to/image3',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project3',
        order: 2,
        // technologies: [1,7,8,9],
        technologies:["TypeScript","JavaScript","HTML","CSS"],
        pinned: true
    },
    {
        id: 4,
        title: 'Project Name4',
        description: 'Project description 4 here.',
        image: 'https://path.to/image4',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project4',
        order: 4,
        // technologies: [1,7,8,9],
        technologies:["TypeScript","JavaScript","HTML","CSS"],
        pinned: true
    },
    {
        id: 5,
        title: 'Project Name5',
        description: 'Project description 5 here.',
        image: 'https://path.to/image5',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project5',
        order: 5,
        // technologies: [1,7,8,9],
        technologies:["TypeScript","JavaScript","HTML","CSS"],
        pinned: true
    },
    {
        id: 6,
        title: 'Project Name6',
        description: 'Project description 6 here.',
        image: 'https://path.to/image6',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project6',
        order: 6,
        // technologies: [1,7,8,9],
        technologies:["TypeScript","JavaScript","HTML","CSS"],
        pinned: true
    },
    {
        id: 7,
        title: 'Project Name7',
        description: 'Project description 7 here.',
        image: 'https://path.to/image7',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project7',
        order: 7,
        // technologies: [1,7,8,9],
        technologies:["TypeScript","JavaScript","HTML","CSS"],
        pinned: false
    },
    {
        id: 8,
        title: 'Project Name8',
        description: 'Project description 8 here.',
        image: 'https://path.to/image8',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project8',
        order: 8,
        // technologies: [1,7,8,9],
        technologies:["TypeScript","JavaScript","HTML","CSS"],
        pinned: false
    }

]
export const PROJECT_ITEM: projectType = {
    id: 0,
    title: 'Project Name',
    description: 'Project description 0 here.',
    image: 'https://path.to/image',
    start_date: null,
    end_date: null,
    github: 'https://path.to/github',
    link: 'https://path.to/project',
    order: 0,
    technologies: ['tech1', 'tech2', 'tech3'],
    pinned: true
}


export const MOCK_API_DATA = {
    _count: 3,
    _last: null,
    _items: PROJECT_DATA
}