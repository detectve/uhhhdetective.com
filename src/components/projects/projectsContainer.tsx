import { ProjectItem } from './projectItem'
import projectsData from '@/data/projects.json'
import { Project } from '@/interfaces/project'

export const ProjectsContainer = () => {
    const projects: Project[] = projectsData.projects

    return (
        <div className="my-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project: Project) => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </div>
        </div>
    )
}
