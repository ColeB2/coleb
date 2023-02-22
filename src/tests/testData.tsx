import { projectType } from "../types/customTypes"

export const PROJECT_DATA = [
    {
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
    },
    {
        id: 1,
        title: 'Project Name2',
        description: 'Project description 1 here.',
        image: 'https://path.to/image2',
        start_date: null,
        end_date: null,
        github: 'https://path.to/github2',
        link: null,
        order: 1,
        technologies: ['tech4', 'tech5', 'tech6'],
        pinned: true
    },
    {
        id: 2,
        title: 'Project Name3',
        description: 'Project description 2 here.',
        image: 'https://path.to/image3',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project3',
        order: 2,
        technologies: ['tech7', 'tech8', 'tech9'],
        pinned: true
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