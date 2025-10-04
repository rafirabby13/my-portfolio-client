
const useGetAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project`, {
    next: { revalidate: 3600 }, // refresh every 1 hour
  });
   const projects = await res.json();
   return projects
}

export default useGetAllProjects
