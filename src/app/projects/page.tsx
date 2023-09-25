import Container from "@/components/common/ui/Container";
import { contentfulClient } from "@/lib/contentful/client";
import { GetStaticProps } from "next";

function ProjectsPage({ posts }: { posts: any }): JSX.Element {
    return (
        <Container>
            <h1>Projects</h1>
            <div>
            {JSON.stringify(posts)}
            </div>
        </Container>
    )
}

export const getStaticProps = async () => {
    const response = await contentfulClient.getEntries({ content_type: 'portfolioPost' }
    )

    return {
        
            posts: response.items,
            revalidate: 10
        
    }
}
export default ProjectsPage