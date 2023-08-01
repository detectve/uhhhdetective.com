import { Project } from '@/interfaces/project'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function ProjectItem(project: Project) {
    return (
        <div className="rounded-md border border-zinc-500 p-2 px-3 transition-colors hover:border-zinc-100">
            <div>
                <h1 className="text-lg">{project.name}</h1>
                <h2 className="text-zinc-400">{project.description}</h2>
            </div>
            {project.url && (
                <Link
                    href={project.url}
                    passHref
                    className="text-blue-500 transition-colors hover:text-blue-400">
                    <span className="flex items-center">
                        {project.url}{' '}
                        <ExternalLink className="ml-1" size={16} />
                    </span>
                </Link>
            )}
        </div>
    )
}
