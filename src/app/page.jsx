import { Feed } from "@/components/components";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-2">
        <h1 className="heading">Discover & Share</h1>
        <h3 className="heading gradient_text_1">AI-Powered Prompts</h3>
        <p className="desc text-center">Promptopia is an open-source AI propmting tool for modern world to discover, create and share creative prompts</p>
      </section>
    
      <Feed/>
    </>
  );
}
