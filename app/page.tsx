import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello, my name is Kervee Cosinero</h1>
      <p className="mt-2">I enjoy playing online games.</p>
      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}