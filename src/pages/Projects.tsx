import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import React from 'react'

const Projects = () => {
  return (
    <section className="min-h-[100vh] bg-zinc-900">
      <nav className="text-muted-foreground flex gap-5 justify-center p-[1.5rem] text-sm">
        <a href="#" className="hover:text-white transition-all">
          Home
        </a>
        <a href="#" className="hover:text-white transition-all">
          About
        </a>
        <a href="#" className="hover:text-white transition-all">
          Blog
        </a>
        <a
          href="#"
          className="bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent"
        >
          Contact
        </a>
      </nav>
      <main className="text-center">
        <div className="mt-20 mx-10 lg:mx-56">
          <img src="" alt="" />
          <h1 className="dark text-primary text-3xl font-bold hnime">
            Hi, I'm Jhan Gonzales
          </h1>
          <p className="dark text-primary font-thin pt-[1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium voluptates eligendi consequuntur vitae aut incidunt
            aliquam laudantium reiciendis rem blanditiis ad quam recusandae iure
            a voluptatem soluta, voluptatibus amet.
          </p>
        </div>
        <div className="p-20 flex flex-col gap-[2rem] lg:flex-row">
          <Card className="bg-zinc-800 text-white mt-[1rem] ps-5 border-none rounded-2xl projcard transition-all">
            <CardHeader>
              <CardTitle className="w-full text-left">My Work</CardTitle>
            </CardHeader>
            <CardContent className="w-full text-left font-extralight text-sm">
              <h2>2023 - Product</h2>
              <p className="pt-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                in, inventore consequatur dolore facere dicta reiciendis
                cupiditate quo autem iure, accusantium mollitia nihil harum.
                Facilis quos est culpa itaque sunt!
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-neutral-800 border hover:bg-white hover:text-black hover:scale-105 transition-all font-bold text-xs">
                Read case study
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-zinc-800 text-white mt-[1rem] ps-5 border-none rounded-2xl projcard">
            <CardHeader>
              <CardTitle className="w-full text-left">My Work</CardTitle>
            </CardHeader>
            <CardContent className="w-full text-left font-extralight text-sm">
              <h2>2023 - Product</h2>
              <p className="pt-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                in, inventore consequatur dolore facere dicta reiciendis
                cupiditate quo autem iure, accusantium mollitia nihil harum.
                Facilis quos est culpa itaque sunt!
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-neutral-800 border hover:bg-white hover:text-black hover:scale-105 transition-all font-bold text-xs">
                Read case study
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-zinc-800 text-white mt-[1rem] ps-5 border-none rounded-2xl projcard">
            <CardHeader>
              <CardTitle className="w-full text-left">My Work</CardTitle>
            </CardHeader>
            <CardContent className="w-full text-left font-extralight text-sm">
              <h2>2023 - Product</h2>
              <p className="pt-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                in, inventore consequatur dolore facere dicta reiciendis
                cupiditate quo autem iure, accusantium mollitia nihil harum.
                Facilis quos est culpa itaque sunt!
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-neutral-800 border hover:bg-white hover:text-black hover:scale-105 transition-all font-bold text-xs">
                Read case study
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="underline text-white pb-10 cursor-pointer">
          See all projects!
        </p>
      </main>
    </section>
  )
}

export default Projects
