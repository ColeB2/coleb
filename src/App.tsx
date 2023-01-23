import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Project from './components/Project/Project';

import useOutsideClick from './hooks/hooks';

import { 
    APICallType,
    projectType,
    techDataType,
    techObjectType
} from './types/customTypes'

const techData: techDataType[] = [
    {
        "id": 1,
        "name": "Python",
        "order": 1
    },
    {
        "id": 11,
        "name": "TypeScript",
        "order": 3
    },
    {
        "id": 5,
        "name": "JavaScript",
        "order": 4
    },
    {
        "id": 2,
        "name": "Django",
        "order": 5
    },
    {
        "id": 7,
        "name": "Pygame",
        "order": 6
    },
    {
        "id": 8,
        "name": "React",
        "order": 85
    },
    {
        "id": 9,
        "name": "Django REST Framework",
        "order": 90
    },
    {
        "id": 3,
        "name": "HTML",
        "order": 99
    },
    {
        "id": 4,
        "name": "CSS",
        "order": 99
    },
    {
        "id": 6,
        "name": "Bootstrap",
        "order": 99
    }
]


const url = "https://y5u5bb.deta.dev/projects"

function App() {
    const [loading, setLoading] = useState(true)

    
    const [currentProject, setCurrentProject] = useState<projectType>(
        {} as projectType
    );
    const [pinnedProjectData, setPinnedProjectData] = useState<projectType[]>(
        {} as projectType[] 
    );
    const [filteredProjectData, setFilteredProjectData] = useState<techObjectType[]>(
        [{}] as techObjectType[]
    );

    const [portfolioData, setPortfolioData] = useState<projectType[]>(
        [{}] as projectType[]
    );

    useEffect(() => {
        axios.get(url).then((response:any) => {
            console.log("response", response.data)
            const data: APICallType = response.data
            const items = data["_items"]
            console.log("---items", items)
            // setPortfolioData(items)
            setPortfolioData([...items])
            // setPortfolioData([])
            // setPortfolioData({...items})
            console.log('PortfolioData', portfolioData)
            setLoading(false)
            
        })
    }, [])
    

    useEffect(() => {
        const ret = []
        console.log("portData start", portfolioData)
        for (const tech in techData) {
            const techObj: techDataType = techData[tech]
            const item: techObjectType = {
                id : techObj.id,
                title: techObj.name,
                data: []
            }

            // item.id = tech.id
            // item.title = techData[tech].name
            console.log('INSIDE HERE, portfolio data', portfolioData)
            item.data = portfolioData.filter((project) => {
                console.log("Print HERE", project, "PRINTHERE")
                return (
                    
                    project.technologies &&
                    // Object.values(project.technologies).includes(
                    //     techData[tech].id)
                    Object.values(project.technologies).includes(
                        item.title)
                )
            })
            ret.push(item)
        }
        setFilteredProjectData(ret)

    }, [portfolioData])

    //pinned data
    useEffect(() => {
        setPinnedProjectData(portfolioData.filter((project) => {
            return (project.pinned === true)
        }))
    }, [portfolioData])

    function handleClick(id: number, data: projectType[]) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
    }

    function handleClickOverlay(id: number, data: projectType[]) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
        const topOfOverlay = document.getElementById("top-of-overlay")
        topOfOverlay.scrollIntoView({behavior: "smooth"})
    }


    function handleClose() {
        // setCurrentProject(() => null)
        setCurrentProject({} as projectType)
    }

    const ref = useOutsideClick(handleClose)
    console.log('Outside effect', portfolioData, loading)
    console.log('Outside2', filteredProjectData)

    return (
        
        // loading !== true &&
        loading === false ? 
        <div className="main">
            
            {/* Main Page, sans overlay*/}
            <div className={currentProject === null ? "" : "mask disabled"}>
                <Header />

                
                <section className="cards-list">
                {/* <section className={"cards-list " + (currentProject === null ? "" : "mask" )}> */}
                    {/* Pinned//Featured Projects//Top list of projects */}
                    <Carousel
                        key={99}
                        title="Featured Projects"
                        data={pinnedProjectData}
                        handleClick={handleClick}
                    />
                    {/* Rest of projects based on tech. */}
                    {
                        filteredProjectData.map((item, idx) => {
                            return (
                            item.data &&
                            <Carousel 
                                key={idx}
                                techId={item.techId}
                                title={item.title}
                                data={item.data}
                                handleClick={handleClick}
                            />
                            )
                        })
                    }
                </section>
            </div>

            <section className="project--overlay--section" ref={ref}>
                { 
                    currentProject === null ? null : 
                    <Project
                        key={98}
                        data={currentProject}
                        handleClose={handleClose}
                        handleClick={handleClickOverlay}
                        relatedProjects={pinnedProjectData}
                    />
                }
            </section> 
        </div>
        :
        <div className="loader-container">
            <div className="loader">
            </div>
            <h5 className="loader-text">
                Thank you for visiting.
                If content takes too long to load, please refresh.
            </h5>
        </div>
        
    )
}

export default App
