'use client'
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col">
      <h1>Welcome to Shoaebk portfolio</h1>
      <button type="button" onClick={()=>router.push("/home")}> Home</button>
      <button type="button" onClick={()=>router.push("/expertise")}> Expertise</button>
      <button type="button" onClick={()=>router.push("/work")}> Work</button>
      <button type="button" onClick={()=>router.push("/experience")}> Experience</button>
      <button type="button" onClick={()=>router.push("/contact")}> Contact</button>
      {/* <Link href="/home">Home</Link>      
      <Link href="/expertise">Expertise</Link>      
      <Link href="/work">Work</Link>      
      <Link href="/experience">Experience</Link>      
      <Link href="/contact">Contact</Link>     */}
    </main>
  );
}
