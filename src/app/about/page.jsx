import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageSara from '@/images/hero.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <div className="mx-auto mt-16 flex max-w-7xl flex-col px-6 lg:flex-row lg:px-8">
        <SectionIntro
          eyebrow=""
          title="Conheça a nossa CEO: Dra. Sara Viana"
          invert
        >
          <p>
            A Dra. Sara Viana é a fundadora e CEO da Artmed Clinic, uma
            profissional apaixonada pela medicina estética e dedicada a
            proporcionar aos pacientes os melhores resultados possíveis. Com uma
            formação sólida e uma vasta experiência na área, tem-se destacado
            como uma referência em tratamentos estéticos e bem-estar.
          </p>
        </SectionIntro>
        <Image
          alt="Dra. Sara Viana"
          src={imageSara}
          className="h-96 object-cover pt-8 grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:pt-0"
        />
      </div>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Formação e Experiência" invert>
            Graduada em Medicina pela Universidade do Minho, a Dra. Sara Viana
            especializou-se em Medicina Estética, pela Universidade de Alcalá,
            realizando diversos cursos de atualização e aperfeiçoamento tanto a
            nivel nacional como internacional.
          </GridListItem>
          <GridListItem title="Filosofia de Trabalho" invert>
            A Dra. Sara Viana acredita que cada paciente é único e merece um
            atendimento personalizado. A sua filosofia é baseada na escuta
            ativa, no respeito e na empatia, sempre com o objetivo de entender
            as necessidades e expectativas de cada um. Está comprometida em
            promover a beleza natural dos seus pacientes, priorizando técnicas
            seguras e eficazes.
          </GridListItem>
          <GridListItem title="Compromisso com a Excelência" invert>
            Sob a liderança da Dra. Sara Viana, a Artmed Clinic tem se destacado
            pela qualidade dos serviços prestados e pela satisfação dos
            pacientes. Está sempre atenta às inovações e tendências na medicina
            estética, garantindo que a clínica esteja na vanguarda do setor.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Liderança',
    people: [
      {
        name: 'Dra. Sara Viana',
        role: 'Fundadora / CEO',
        image: { src: imageSara },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'Sobre Nós',
  description:
    'Na Artmed, acreditamos que a beleza é uma expressão única de cada indivíduo e que todos merecem sentir-se bem na própria pele. ',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Sobre Nós" title="A beleza é uma expressão única">
        <p>
          Na Artmed, acreditamos que a beleza é uma expressão única de cada
          indivíduo e que todos merecem sentir-se bem na própria pele.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Localizada em Ponte de Lima, a nossa clínica oferece uma ampla gama
            de tratamentos de medicina estética, projetados para realçar a tua
            beleza natural e promover a tua confiança.
          </p>
          <p>
            Com uma equipa de profissionais altamente qualificados e
            experientes, utilizamos as técnicas mais avançadas e seguras para
            proporcionar resultados excepcionais. Desde procedimentos
            minimamente invasivos até tratamentos personalizados de
            rejuvenescimento, estamos aqui para te ajudar a alcançar teus
            objetivos estéticos.
          </p>
          <p>
            O Nosso compromisso é oferecer um atendimento personalizado, onde a
            tua satisfação e bem-estar são a nossa prioridade. Na Artmed,
            encontrarás um ambiente acolhedor e profissional, onde cada visita é
            uma oportunidade para cuidar de ti.
          </p>
        </div>
      </PageIntro>

      <Culture />

      <ContactSection />
    </>
  )
}
