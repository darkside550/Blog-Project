import Image from "next/image";

export default function Home() {
  return (
    <main className='text-center pt-32 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Welcome to my blog</h1>
      <p className='max-w-[750px] mx-auto leading-8'>
        Welcome to my blog app, a project built with Next.js and Prisma ORM and deployed on Vercel.
        Through this journey, I delved into Next.js routing, explored caching techniques, and
        successfully integrated Kinde for authentication. This project reflects my hands-on learning
        experience and showcases the power of modern web technologies.
      </p>
    </main>
  );
}
