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
import beforeAfter1 from '@/images/services/beforeAfter1.jpg'
import beforeAfter2 from '@/images/services/beforeAfter2.jpg'
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
    name: 'Pele',
    image: beforeAfter1,
  },
  {
    name: 'Pele 2',
    image: beforeAfter2,
  },
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
        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.name}>
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.name}
                  className="h-96 w-auto object-fill"
                />
              </div>
            </FadeIn>
          ))}
        </Border>
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
