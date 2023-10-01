import Container from "@/components/common/ui/Container";
import Spinner from "@/components/common/ui/spinner/Spinner";
import { contentfulClient } from "@/lib/contentful/client";
import { Suspense } from "react";

async function fetchPosts() {
    const response = await contentfulClient.getEntries({ content_type: 'portfolioPost' }
    )

    return {
        posts: response.items,
        revalidate: 10
    }
}

export default async function ProjectsPage() {
    const { posts } = await fetchPosts()
    console.log(posts);

    return (
        <Container>
            <div>
                <Suspense fallback={<Spinner />}>
                    <ul>
                        {posts.map((el, i) => {
                            return (
                                <li key={i}>
                                    <h2>{el?.fields.title as string}</h2>
                                </li>
                            )
                        })}
                    </ul>
                </Suspense>
            </div>
        </Container>
    )
}

