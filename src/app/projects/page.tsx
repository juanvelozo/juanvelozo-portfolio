import Container from "@/components/common/ui/Container";
import Spinner from "@/components/common/ui/spinner/Spinner";
import { contentfulClient } from "@/lib/contentful/client";
import { Suspense } from "react";

async function fetchPosts ()  {
    const response = await contentfulClient.getEntries({ content_type: 'portfolioPost' }
    )

    return {
        
            posts: response.items,
            revalidate: 10
        
    }
}

export default async function ProjectsPage() {
    const posts = await fetchPosts()

    return (
        <Container>
            <h1>Projects</h1>
            <Suspense fallback={<Spinner/>}>
            {JSON.stringify(posts.posts[0].fields)}
            </Suspense>
        </Container>
    )
}

