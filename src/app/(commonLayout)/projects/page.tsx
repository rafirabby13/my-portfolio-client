

import ProjectComponent from "@/components/projectComponent/ProjectComponent";


const Projects = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project`, {
        next: { revalidate: 3600 }, // refresh every 1 hour
    });
    const {projects} = await res.json();
console.log(projects)
    // Get unique categories from projects



    return (
        <ProjectComponent projects={projects} />
    );
};

export default Projects;