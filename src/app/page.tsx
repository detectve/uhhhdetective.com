import Image from 'next/image'
import { ProjectsContainer } from '@/components/projects/projectsContainer'

export default function Home() {
    let age = 17
    return (
        <div>
            <h1 className="text-3xl">uhhhdetective.com</h1>
            <p className="text-lg text-zinc-400">
                Hi! I&apos;m Emily. I&apos;m a {age} year old full stack web
                developer from the UK. I have interests within web development,
                cybersecurity, graphic design and photography. Outside of those
                interests, I also enjoy travelling around the country via
                railways and seeing sights.
                <br />
                <br />
                You can see a list of my current projects below:
           </p>
            <div>
                <ProjectsContainer />
            </div>
            <p className="text-lg text-zinc-400">
                I mostly work with Next, SvelteKit and TypeScript, but I also have
                experience with Python and C#. I am looking to expand this knowledge 
                and learn to use more technologies in the near future.
            </p>
        </div>
    )
}
