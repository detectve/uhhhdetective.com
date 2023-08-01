import Image from 'next/image'
import { ProjectsContainer } from '@/components/projects/projectsContainer'

export default function Home() {
    let age = 16
    return (
        <div>
            <h1 className="text-3xl">uhhhdetective.com</h1>
            <p className="text-lg">
                Hi, I&apos;m Emily. I&apos;m a {age} year old front-end
                developer from the UK. I have interests within web development,
                cybersecurity, graphic design and photography. Outside of those
                interests, I also enjoy travelling around the country via
                railways and seeing sights.
            </p>
            <div>
                <ProjectsContainer />
            </div>
        </div>
    )
}
