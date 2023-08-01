import { Project } from '@/interfaces/project'
import Link from 'next/link'
import { ExternalLink, Circle } from 'lucide-react'

export function ProjectItem(project: Project) {
    interface LanguageColors {
        [key: string]: string
    }

    const languagesColor: LanguageColors = {
        TypeScript: 'text-blue-500',
        JavaScript: 'text-yellow-500',
        Python: 'text-blue-400',
        Svelte: 'text-orange-400',
    }

    return (
        <div className="rounded-md border border-zinc-500 p-3 px-5 transition-colors hover:border-zinc-100">
            <div className="mb-2">
                <h1 className="text-lg">{project.name}</h1>
                <p className="text-zinc-400">{project.description}</p>
            </div>
            <div className="flex justify-between">
                {project.primaryLanguage && (
                    <p className="text-zinc-400 flex items-center">
                        <span
                            className={`${
                                languagesColor[project.primaryLanguage]
                            } transition-colors`}>
                            <Circle className="inline-block mr-1" size={10} fill='currentColor' />
                        </span>{' '}
                        {project.primaryLanguage}
                    </p>
                )}
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
        </div>
    )
}
