import Link from 'next/link'
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Twitter } from 'lucide-react'

export function Footer() {
    return (
        <div className="flex justify-between border-t border-zinc-500 p-5 md:px-24">
            <div>
                <p className="text-zinc-400">
                    © 2023 - uhhhdetective.com. All rights reserved.
                </p>
                <p className="text-zinc-400">
                    Created and designed by uhhhdetective. Website source code available on my {' '}
                    <Link
                        href="https://github.com/detectve/uhhhdetective.com/"
                        passHref>
                        <span className="text-blue-500 transition-colors hover:text-blue-400">
                            GitHub
                        </span>
                    </Link>
                    .
                </p>
            </div>
            <div className="mt-2 flex gap-3">
                <Link
                    href="
                    https://github.com/detectve/uhhhdetective.com/
                "
                    passHref>
                    <span className="text-blue-500 transition-colors hover:text-blue-400">
                        <GitHubLogoIcon className="h-6 w-6" />
                    </span>
                </Link>
                <Link
                    href="
                    https://discord.com/users/718798976211484724
                "
                    passHref>
                    <span className="text-blue-500 transition-colors hover:text-blue-400">
                        <DiscordLogoIcon className="h-6 w-6" />
                    </span>
                </Link>
                <Link
                    href="
                    https://twitter.com/uhhhdetective
                "
                    passHref>
                    <span className="text-blue-500 transition-colors hover:text-blue-400">
                        <TwitterLogoIcon className="h-6 w-6" />
                    </span>
                </Link>
            </div>
        </div>
    )
}
