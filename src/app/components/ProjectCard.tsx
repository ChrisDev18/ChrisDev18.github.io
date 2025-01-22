import {getImageProps} from "next/image";
import {raleway} from "@/app/fonts";
import {Project} from "@/app/components/Carousel";

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
      .split(', ')
      .map((str) => {
        const [url, dpi] = str.split(' ')
        return `url("${url}") ${dpi}`
      })
      .join(', ')
  return `image-set(${imageSet})`
}

export default function ProjectCard({project, className}: Readonly<{project: Project, className?: string;}>) {
  let backgroundImage = null;
  if (project.img) {
    const {props: { srcSet }} = getImageProps({ alt: '', width: 10, height: 10, src: project.img.src });
    backgroundImage = getBackgroundImage(srcSet);
  }


  return (
      <div className={`${className} relative -z-10 py-4 lg:py-8 -mx-4 lg:-mx-10`}>
        <div className={"border-2 border-white border-opacity-10 px-4 lg:px-10 py-6 lg:py-10"}>
          {backgroundImage &&
          <div style={{backgroundImage}}
               className={"absolute top-0 bottom-0 left-0 right-0 blur-3xl bg-cover -m-20 -z-10 opacity-80"}/>
          }
          <h3 className={`${raleway.className} text-2xl text-left font-semibold mb-2`}>
            {project.title}
          </h3>
          <p className={`${raleway.className} text-left font-medium mb-8`}>
            {project.description}
          </p>

          <p className={`${raleway.className} text-left font-medium opacity-50`}>See more</p>
        </div>
      </div>
  );
}