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
import { techData, techMap } from './api/technologies';





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
                console.log('------------RESPONSE-----------',response)
                // console.log('----------------------------------------------')
                // DETA FAST API
                // const data = response.data;
                // const items = data["_items"];
                // PYTHONANYWHERE DJANGO API
                const data = response.data;
                const items = data
                console.log(items)
                items.forEach((proj: projectType) => {
                    const newTech = proj.technologies.map((tech) => techMap[tech])
                    proj.technologies = newTech
                })
                console.log(items)
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
                // console.log(project.technologies)
                return (
                    project.technologies &&
                    Object.values(project.technologies).includes(
                        item.title)
                )
            })
            // randomly sort
            item.data.sort(() => (Math.random() - 0.5));
            // item.data.sort((a,b) => a.order - b.order)
            ret.push(item)
        }
        setFilteredProjectData(ret)
    }, [portfolioData])

    //pinned data
    useEffect(() => {
        const newPinnedPortfolio: projectType[] = portfolioData.filter((project) => {
            return (project.pinned === true)
        })
        newPinnedPortfolio.sort((a, b) => a.order - b.order);
        setPinnedProjectData(newPinnedPortfolio)
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
                        handleEnter={undefined}
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
