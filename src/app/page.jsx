import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageServices from '@/images/services.jpg'
import imageClinic from '@/images/clinic.jpg'
import imageHero from '@/images/hero.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Descubra como podemos ajudá&#x2011;lo a revelar a sua melhor versão."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Agenda uma consulta de avaliação e vem conhecer como podemos
          transformar a tua experiência de beleza!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageServices}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Medicina Estética e Regenerativa">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Nutrição">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="Psicologia">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Medicina Geral e Familiar">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
            <ListItem title="Massagens">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
            <ListItem title="Limpeza de Pele">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Treatments() {
  return (
    <>
      <SectionIntro
        eyebrow="Medicina Estética e Regenerativa"
        title="Tratamentos estéticos personalizados para realçar a sua beleza natural"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Na Artmed, disponibilizamos uma variedade de tratamentos estéticos,
          todos projetados para atender às tuas necessidades e realçar tua
          beleza natural. Confere abaixo alguns dos principais serviços que
          oferecemos:
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:justify-end">
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pr-4">
            <ListItem title="Avaliação profunda da qualidade da pele">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Plasma Rico em Plaquetas">
              Plasma rico em Plaquetas, mesoterapia e microagulhamento
            </ListItem>
            <ListItem title="Terapia Capilar">
              Para a regeneração capilar, que estimula o crescimento dos fios e
              melhora a saúde do couro cabeludo.
            </ListItem>
            <ListItem title="Toxina botulínica">
              Este tratamento minimamente invasivo ajuda a suavizar linhas de
              expressão e rugas, proporcionando um aspecto mais jovem e relaxado
              ao rosto. Além disso, permite tratar a sudorese excessiva em áreas
              como axilas, mãos e pés, proporcionando conforto e qualidade de
              vida.
            </ListItem>
            <ListItem title="Preenchimento com Ácido Hialurónico">
              Utilizados para restaurar o volume perdido e definir contornos
              faciais, os preenchimentos são uma excelente opção para lábios,
              bochechas e sulcos nasogenianos.
            </ListItem>
            <ListItem title="Hidratação Profunda da Pele"></ListItem>
            <ListItem title="Biostimuladores de colagénio">
              São indicados para melhorar a firmeza e a elasticidade da pele,
              além de atenuar rugas e flacidez. Os efeitos são progressivos e
              duradouros, proporcionando uma aparência mais jovem e saudável. Os
              biostimuladores são frequentemente utilizados em áreas como o
              rosto, pescoço e mãos.
            </ListItem>
            <ListItem title="Exion - Microagulhamento com Radiofrequência">
              Um tratamento que utiliza pequenas agulhas para criar microlesões
              na pele, estimulando a produção de colágeno e melhorando a textura
              e a elasticidade da pele. É eficaz para cicatrizes de acne, linhas
              finas e poros dilatados.
            </ListItem>
            <ListItem title="Exion - Radiofrequência facial">
              São indicados para melhorar a firmeza e a elasticidade da pele,
              além de atenuar rugas e flacidez. Os efeitos são progressivos e
              duradouros, proporcionando uma aparência mais jovem e saudável. Os
              biostimuladores são frequentemente utilizados em áreas como o
              rosto, pescoço e mãos.
            </ListItem>
            <ListItem title="Exion - Radiofrequência corporal">
              Uma técnica eficaz para o rejuvenescimento corporal, que utiliza
              energia para estimular a produção de colágeno, melhorando a
              firmeza da pele e diminuição de gordura localizada.
            </ListItem>
            <ListItem title="Lumecca">
              Luz pulsada intensa: Uma tecnologia que trata manchas, vasos
              sanguíneos e sinais de envelhecimento da pele, promovendo uma
              aparência mais uniforme e rejuvenescida.
            </ListItem>
            <ListItem title="Vasculaze">Tratamento de derrames</ListItem>
            <ListItem title="Microagulhamento"></ListItem>
            <ListItem title="Peeling químico">
              Este procedimento remove as camadas superficiais da pele,
              promovendo a renovação celular e melhorando a textura, tom e
              aparência geral da pele.
            </ListItem>
          </List>
          <div className="sticky top-0 flex justify-center self-start lg:w-1/2 lg:justify-end lg:pl-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageClinic}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Realçe a sua beleza com tratamentos estéticos de alta qualidade. Na nossa clínica oferecemos cuidados personalizados, desde rejuvenescimento facial até remodelação corporal, sempre com resultados naturais e seguros.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="mt-12 lg:mt-0 lg:flex-none">
            <FadeIn className="max-w-3xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                Descubra a beleza que sempre sonhou, com o cuidado que merece.
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                Na Artmed, acreditamos que a beleza é uma expressão única de
                cada indivíduo e que todos merecem sentir-se bem na própria
                pele. Localizada em Ponte de Lima, a nossa clínica oferece uma
                ampla gama de tratamentos de medicina estética, projetados para
                realçar a sua beleza natural e promover a sua confiança.
              </p>
            </FadeIn>
          </div>
          <FadeIn className="hidden w-[33.75rem] lg:block lg:w-[30rem]">
            <StylizedImage
              src={imageHero}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
      </Container>

      <Services />

      <Clients />

      <Treatments />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Jose Cerqueira', photo: imageBlakeReid }}
      >
        Serviço excelente! Fiz um tratamento de medicina estética e fiquei muito
        satisfeito com os resultados. Equipa profissional e atenciosa. Recomendo
        a quem procura um serviço de qualidade.
      </Testimonial>

      <ContactSection />
    </>
  )
}
