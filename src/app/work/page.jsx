import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ComparisonSlider } from '@/components/ComparisonSlider'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import before1 from '@/images/services/before-1.jpeg'
import after1 from '@/images/services/after-1.jpeg'
import beforeAfter2 from '@/images/services/before-after-2.jpeg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'

const caseStudies = [
  {
    name: 'Phobia 1',
    beforeImage: before1,
    afterImage: after1,
    title: 'Preenchimento com Ácido Hialurónico',
    description:
      'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
    summary: [
      'Uma paciente de 42 anos procurou a nossa clínica com o objetivo de suavizar as linhas de expressão e restaurar o volume perdido nas maçãs do rosto e nos lábios. Com o passar do tempo, o seu rosto apresentava sinais de envelhecimento, como sulcos nasogenianos (entre o nariz e a boca), perda de volume nas bochechas e lábios mais finos. A paciente desejava um tratamento que proporcionasse uma aparência rejuvenescida e natural, sem recorrer a métodos invasivos.',
      'Após uma avaliação detalhada, foi decidido optar pelo preenchimento com Ácido Hialurónico. Este é um tratamento minimamente invasivo, que permite preencher rugas e devolver volume ao rosto, respeitando a harmonia facial da paciente. Foram identificadas as áreas específicas para aplicação do ácido hialurónico, focando-se nos sulcos nasogenianos, maçãs do rosto e contorno dos lábios. A substância foi cuidadosamente injetada em pontos estratégicos para criar um efeito de lifting e melhorar a hidratação e elasticidade da pele.',
    ],
    date: '2022-10',
    service: 'Blockchain development',
    href: '/',
  },
  // {
  //   name: 'Phobia',
  //   photo: beforeAfter2,
  //   image: { src: beforeAfter2 },
  //   title: 'Preenchimento com Ácido Hialurónico',
  //   description:
  //     'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
  //   summary: [
  //     'Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.',
  //     'We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero.',
  //   ],
  //   date: '2022-10',
  //   service: 'Blockchain development',
  //   href: '/',
  // },
]

function CaseStudies() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Casos de Estudo
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.name}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <ComparisonSlider
                    beforeImage={caseStudy.beforeImage}
                    afterImage={caseStudy.afterImage}
                    className="flex-none"
                  />
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {caseStudy.title}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Tratamentos"
        title="Transforme-se com os Nossos Tratamentos de Estética Avançada"
      >
        <p>
          Na Artmed, acreditamos que cada pessoa é única e merece um cuidado
          estético à sua medida. Com uma equipa de especialistas e tecnologias
          de última geração, oferecemos tratamentos avançados e personalizados
          para realçar a tua beleza natural, mantendo sempre a segurança e a
          qualidade como prioridades. Explore as nossas soluções e descobre como
          podemos ajudá-lo a alcançar os seus objetivos de estética e bem-estar.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

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
