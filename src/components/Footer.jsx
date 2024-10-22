import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'A ArtMed',
    links: [
      { title: 'Sobre Nós', href: '/about' },
      { title: 'O Nosso Processo', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contacta-nos', href: '/contact' },
    ],
  },
  {
    title: 'Segue-nos',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form
      className="max-w-sm"
      action="https://api.staticforms.xyz/submit"
      method="post"
    >
      <input
        type="hidden"
        name="accessKey"
        value="93cffe97-b43c-4b02-abc8-7f5ac9aa8198"
      />
      <input type="hidden" name="$newsletter" value="Want to get news" />
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Faça parte da nossa rede de contactos
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Inscreva-se para estar sempre a par das últimas notícias da ArtMed.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Endereço de email"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <input
            type="hidden"
            name="redirectTo"
            value="http://artmed.netlify.app?success=true"
          />
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © ArtMed Clinic {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
