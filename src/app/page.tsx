import Container from "@/components/common/ui/Container";
import {ColumnSection} from "@/features/home/ColumnSection";
import HeroHome from "@/features/home/Hero";

export default function Home(): JSX.Element {
  
  return (
    <Container>
      <HeroHome />
      <ColumnSection 
        title="I can assist you with" 
        sections={[
            { children: <ul>
              <li>Web</li>
              <li>Web</li>
              <li>Web</li>
              <li>Web</li>
              <li>Web</li>
              </ul>,
              title: "Web development" }, 
            { children: <ul>
              <li>Frontend</li>
              <li>Frontend</li>
              <li>Frontend</li>
              <li>Frontend</li>
              <li>Frontend</li>
              </ul>,
              title: "Frontend engineering" }, { children: <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              </ul>,
              title: "Mobile development" }, 
            
          ]} />
      <ColumnSection 
      reverse
        title="...and I'm also experienced with" 
        sections={[
            { children: <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              </ul>,
              title: "Web development" }, 
            { children: <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              </ul>,
              title: "Frontend engineering" }, { children: <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              </ul>,
              title: "Mobile development" }, 
            { children: <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              </ul>,
              title: "Web development" }
          ]} />
    </Container>
  )
}
