import Image from 'next/image'
import { ProjectsContainer } from '@/components/projects/projectsContainer'

export default function Home() {
  return (
      <div>
        <h1 className="text-5xl">
          uhhhdetective.com
        </h1>
        <p className="text-2xl">
          Hi, I'm Emily. I'm a {/*age*/} year old front-end developer from the UK. I have interests within web development, cybersecurity, graphic design and photography. Outside of
          those interests, I also enjoy travelling around the country via railways and seeing sights.
      </p>
      <div>
        <ProjectsContainer />
      </div>
      </div>
  )
}
