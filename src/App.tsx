import { useState, useEffect, KeyboardEventHandler } from 'react'
import './App.css'

import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Project from './components/Project/Project';

import useOutsideClick from './hooks/hooks';

import { 
    projectType,
    techDataType,
    techObjectType
} from './types/customTypes'

import api from './api/projects';
import { techData } from './api/technologies';





function App() {
    const [loading, setLoading] = useState(true)

    const [currentProject, setCurrentProject] = useState<projectType | null>(
        null as projectType | null
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
        const fetchProjects = async () => {
            try {
                const response = await api.get('/projects')
                // console.log('------------RESPONSE-----------',response)
                // console.log('----------------------------------------------')
                const data = response.data;
                const items = data["_items"];
                setPortfolioData([...items])
                setLoading(false)
            } catch (err: any) {
                // Not in 200 response range
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.respopnse.headers);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchProjects();
    }, [])
    

    useEffect(() => {
        const ret = []
        for (const tech in techData) {
            const techObj: techDataType = techData[tech]
            const item: techObjectType = {
                id: techObj.id,
                title: techObj.name,
                data: []
            }
            item.data = portfolioData.filter((project) => {
                return (
                    project.technologies &&
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


    // FUNCTIONS
    function handleClick(id: number, data: projectType[]) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
    }
        
    function handleEnter(id: number, data:projectType[], e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key == "Enter") {
            data.forEach((item) => {
                if (item.id === id) {
                    setCurrentProject(() => item)
                }
            })
        }
    }

    function handleClickOverlay(id: number, data: projectType[]) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
        const topOfOverlay = document.getElementById("top-of-overlay")!
        topOfOverlay.scrollIntoView({behavior: "smooth"})
    }


    function handleClose() {
        setCurrentProject(() => null)
    }

    const ref = useOutsideClick(handleClose)

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
                        id={99}
                        title="Featured Projects"
                        data={pinnedProjectData}
                        handleClick={handleClick}
                        handleEnter={handleEnter}
                    />
                    {/* Rest of projects based on tech. */}
                    {
                        filteredProjectData.map((item, idx) => {
                            return (
                            item.data &&
                            <Carousel 
                                key={idx}
                                id={item.id}
                                title={item.title}
                                data={item.data}
                                handleClick={handleClick}
                                handleEnter={handleEnter}
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
                        handleEnter={handleEnter}
                        relatedProjects={pinnedProjectData}
                    />
                }
            </section> 
        </div>
        :
        <div className="loader-container">
            <div className="loader"></div>
            <h5 className="loader-text">
                Thank you for visiting.
                If content takes too long to load, please refresh.
            </h5>
        </div>
        
    )
}

export default App
