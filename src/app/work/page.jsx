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
import imageVasculaze from '@/images/services/vasculaze.jpeg'
import imagePreenchimento from '@/images/services/preenchimento.jpeg'
import imageBotoxLabios from '@/images/services/botox-labios.jpeg'
import imageBotoxTesta from '@/images/services/botox-testa.jpeg'
import imagePreenchimentoLabios from '@/images/services/preenchimento-labios.jpeg'
import imageBotoxRugas from '@/images/services/botox-rugas-2.jpeg'
import imageCabelo from '@/images/services/cabelo.jpeg'
import imageCabelo2 from '@/images/services/cabelo-2.jpeg'
import imageLumecca from '@/images/services/lumecca.jpeg'
import imageLumecca2 from '@/images/services/lumecca-2.jpeg'
import imageAcido from '@/images/services/acido.jpeg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'

const caseStudies = [
  {
    name: 'Vasculaze',
    description: 'Após 1 sessão de Vasculaze',
    image: imageVasculaze,
  },
  {
    name: 'Preenchimento',
    description: 'Após preenchimento labial',
    image: imagePreenchimento,
  },
  {
    name: 'Botox Labios',
    description: 'Após correção de sorriso gengival com aplicação de Botox',
    image: imageBotoxLabios,
  },
  {
    name: 'Botox Testa',
    description: 'Tratamento de rugas de expressão com Botox',
    image: imageBotoxTesta,
  },
  {
    name: 'Preenchimento Labios',
    description: 'Preenchimento Labial',
    image: imagePreenchimentoLabios,
  },
  {
    name: 'Botox Rugas',
    description: 'Tratamento de rugas de expressão com aplicação de Botox',
    image: imageBotoxRugas,
  },
  {
    name: 'Cabelo',
    description: 'Após 1 sessão de tratamento capilar',
    image: imageCabelo,
  },
  {
    name: 'Cabelo 2',
    description: '3 sessões de terapia capilar',
    image: imageCabelo2,
  },
  {
    name: 'Lumecca',
    description: 'Após 1 sessão de Lumecca',
    image: imageLumecca,
  },
  {
    name: 'Lumecca 2',
    description: 'Após 1 sessão de Lumecca',
    image: imageLumecca2,
  },
  {
    name: 'Acido Hialuronico',
    description: 'Preenchimento com ácido Hialurónico',
    image: imageAcido,
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
        <Border className="grid grid-cols-1 gap-x-8 gap-y-8 pt-16 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.name}>
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.name}
                  className="h-96 w-auto object-fill"
                />
                <p>{caseStudy.description}</p>
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
