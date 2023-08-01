import { Project } from "@/interfaces/project"

export function ProjectItem(
    project: Project
) {
    return (
        <>
            <div>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
            </div>
        </>
    )
}