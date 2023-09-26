import Container from "@/components/common/ui/Container";
import { contentfulClient } from "@/lib/contentful/client";

async function ProjectsPage() {
const posts = await fetchPosts()

    return (
        <Container>
            <h1>Projects</h1>
            <div>
            {JSON.stringify(posts)}
            </div>
        </Container>
    )
}

export async function fetchPosts ()  {
    const response = await contentfulClient.getEntries({ content_type: 'portfolioPost' }
    )

    return {
        
            posts: response.items,
            revalidate: 10
        
    }
}
export default ProjectsPage