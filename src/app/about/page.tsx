import { Metadata } from "next";
import { Quote } from "lucide-react";

import { tools } from "@/config/constants";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:mt-28 lg:max-w-7xl">
            <section className="relative max-w-3xl duration-700 animate-in slide-in-from-top-full">
                <h1 className="mb-8 text-3xl font-black tracking-tight sm:text-5xl lg:leading-tight">
                    I&apos;m {siteConfig.author.name}. I live in India, where I build
                    the future.
                </h1>

                <div className="font-sans leading-relaxed text-foreground/60">
                    I am a self-driven, career-oriented software developer,
                    specializing in full-stack development with TypeScript,
                    React/Next.js, Java and Spring Boot — and a firm believer in open
                    source.
                    <br />
                    <br />I strongly believe in continuous learning and improving
                    myself, so I try my best to learn in any situation possible,
                    unfavorable or not — always working to expand my knowledge and
                    sharpen my development skills.
                    <blockquote className="relative my-8 overflow-hidden rounded-md border bg-secondary/50 p-4 pr-12 tracking-tight lg:py-6 lg:pl-6">
                        <Quote
                            className="absolute -right-4 -top-6 -z-10 h-24 w-24 -rotate-12 text-secondary duration-1000 animate-in slide-in-from-left-full"
                            aria-hidden="true"
                        />
                        If you ever spot me in the wild, don&apos;t hesitate to say hello!
                        Let&apos;s grab a drink and geek-out over the latest advancements
                        in development or discuss our favorite programming
                        language.
                    </blockquote>
                </div>
            </section>

            {/* Usage  */}
            <section className="mt-16 max-w-2xl">
                <div className="mb-8">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight">Usage</h2>

                    <p className="max-w-xl text-foreground/60">
                        Tools, technologies and gadgets I use on a daily basis but not
                        limited to.
                    </p>
                </div>

                {tools.map(({ heading, items }, i) => (
                    <div key={i} className="my-4">
                        <h3 className="text-2xl font-semibold">{heading}</h3>

                        {items.map(({ name, url, description, icon: Icon }, i) => (
                            <li key={i} className="flex items-center gap-x-2 p-2">
                                <Icon className="h-5 min-h-fit w-5 min-w-fit" />
                                <a
                                    href={url}
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    aria-label={name}
                                    className="my-auto min-w-fit leading-3 text-blue-500 underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline dark:text-blue-400"
                                >
                                    {name}
                                </a>
                                -
                                <span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">
                                    {description}
                                </span>
                            </li>
                        ))}
                    </div>
                ))}
            </section>
        </main>
    );
}
