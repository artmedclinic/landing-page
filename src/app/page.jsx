import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageInmode from '@/images/machine1.png'
import imageExion from '@/images/machine2.png'
import imageServices from '@/images/services.jpg'
import imageClinic from '@/images/clinic.jpg'
import imageHero from '@/images/hero.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import { loadCaseStudies } from '@/lib/mdx'

function ContactCTA() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-10 sm:mt-32 sm:py-16 lg:mt-56">
      <Container>
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 sm:mx-0 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Vamos transformar a sua experiência de beleza
              </h2>
              <div className="mt-6 flex">
                <Button href="/contact" invert>
                  Contacte-nos
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

const clients = [
  ['Inmode', imageInmode],
  ['Exion', imageExion],
]

function Machines() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Equipamento de Última Geração para Resultados Excepcionais
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([name, logo]) => (
              <li key={name} className="flex">
                <FadeIn>
                  <Image
                    src={logo}
                    alt={name}
                    className="h-64 w-auto object-fill grayscale"
                  />
                  <p className="text-white">{name}</p>
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
              É um campo em crescimento que combina princípios da medicina
              tradicional com técnicas inovadoras para melhorar a aparência e a
              saúde da pele, além de promover a regeneração celular. Estas duas
              áreas, quando combinadas, oferecem uma abordagem holística,
              focando não apenas na aparência externa, mas também na saúde e
              bem-estar do paciente.
            </ListItem>
            <ListItem title="Tricologio">
              A área que se dedica ao fio e ao couro cabeludo. Envolve a análise
              de diferentes condições capilares, como a queda de cabelo, caspa,
              dermatite seborreica, alopecia, entre outras. O tratamento pode
              variar de acordo com a causa subjacente.
            </ListItem>
            <ListItem title="Nutrição">
              A consulta envolve a avaliação das necessidades dietéticas
              individuais e a elaboração de planos alimentares que atendam às
              metas de saúde específicas de cada pessoa.
            </ListItem>
            <ListItem title="Psicologia">
              Na consulta vai encontrar a ajuda necessária paraa compreender e
              lidar com problemas que podem ser causa de tristeza,
              irritabilidade, alterações do sono, desmotivação, falta de energia
              para atividades em geral, ansiedade, entre outras.
            </ListItem>
            <ListItem title="Medicina Geral e Familiar">
              É uma especialidade médica globalizante vocacionada para a
              prestação de cuidados primários, que acompanha a evolução do
              doente como um todo nas várias etapas da vida, asseguram uma
              medicina de prevenção e promoção da saúde.
            </ListItem>
            <ListItem title="Fisioterapia/Massagem/Drenagem">
              A Fisioterapia tem como finalidade preservar/melhorar a
              funcionalidade física e reduzir eventuais incapacidades. Inclui
              uma ampla gama de técnicas que pressupõem o tratamento de
              problemas do foro osteoarticular, muscular, neurológico,
              respiratório, assim como de distúrbios da marcha e do equilíbrio
              postural.
            </ListItem>
            <ListItem title="Limpeza de Pele">
              A limpeza de pele tem como objetivo eliminar impurezas, prevenir o
              surgimento de rugas e estimular a regeneração celular.
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
              A consulta de avaliação de Medicina Estética é um momento crucial.
              Durante a consulta, o paciente poderá expressar as suas
              preocupações e expectativas. O médico irá realizar uma avaliação
              detalhada,sendo a qualidade da pele um dos fatores analisados de
              forma profunda com recurso a uma tecnologia desenvolvida para
              quantificar aspectos como manchas, rugas, hidratação e danos
              solares.
            </ListItem>
            <ListItem title="Plasma Rico em Plaquetas">
              O PRP é um concentrado de plaquetas obtido a partir do próprio
              sangue do paciente. Este procedimento tem diversas indicações como
              no rejuvenescimento facial, melhorando a textura da pele,
              reduzindo rugas finas, aumentando a luminosidade e a firmeza, no
              tratamento de alopecia, uma vez que estimula o crescimento
              capilar, na cicatrização de feridas, acelerando o processo de
              cicatrização e melhorando o aspecto das cicatrizes. Além disso,
              pode ser aplicado em diversas áreas do corpo como o rosto,
              pescoço, decote, couro cabeludo, barriga, glúteos, etc.
            </ListItem>
            <ListItem title="Terapia Capilar">
              A terapia capilar na medicina estética é um conjunto de
              tratamentos que visam melhorar a saúde e o aspecto do cabelo e
              couro cabeludo. Abrangendo desde a prevenção da queda de cabelo
              até o tratamento de condições mais complexas, como a alopecia. A
              terapia capilar pode ser feita em mesoterapia, que consiste na
              aplicação de microinjeções no couro cabeludo com substâncias que
              estimulam o crescimento capilar, com plasma rico em plaquetas para
              estimular a regeneração dos tecidos e através de tratamentos
              tópicos e orais.
            </ListItem>
            <ListItem title="Toxina botulínica">
              A toxina botulínica, popularmente conhecida como Botox, é uma
              substância purificada que, quando injetada em pequenas
              quantidades, bloqueia as transmissões nervosas nos músculos,
              relaxando-os. Na Medicina Estética, é usada para suavizar rugas e
              linhas de expressão, proporcionando um aspecto mais jovem e
              natural. Pode ser utilizada nas rugas de expressão: Linhas de
              expressão na testa, entre as sobrancelhas e ao redor dos olhos,
              para a elevação das sobrancelhas, para o tratamento de sorriso
              gengival e para o suor excessivo.
            </ListItem>
            <ListItem title="Preenchimento com Ácido Hialurónico">
              O ácido hialurônico é uma substância natural do corpo, responsável
              por manter a hidratação e a elasticidade da pele. Em procedimentos
              estéticos, ele é utilizado para preencher rugas, linhas de
              expressão e aumentar o volume em áreas como lábios e maçãs do
              rosto. Assim, tem diversas aplicabilidades como no
              rejuvenescimento, na hidratação, na devolução do contorno facial e
              volume perdido ao longo dos anos. : Aumenta o volume em áreas como
              lábios e maçãs do rosto.
            </ListItem>
            <ListItem title="Biostimuladores de colagénio">
              Os bioestimuladores de colágeno são substâncias que estimulam a
              produção natural de colágeno na pele, proporcionando um efeito
              rejuvenescedor e revitalizante. Estimulam a produção de colágeno,
              uma vez que aceleram a sua produção. Com o aumento da produção de
              colágeno, existe uma reestruturação da pele, tornando-a mais
              firme, as rugas são suavizadas e o contorno facial fica mais
              definido. Os resultados naturais e graduais. Os mais comuns são:
              <ul className="pl-4 pt-2">
                <li>
                  <b>Ácido hialurônico (profhilo)</b>: Além de hidratar a pele,
                  estimula a produção de colágeno.
                </li>
                <li className="pt-2">
                  <b>Ácido poli-L-láctico (Sculptra)</b>: Proporciona um lifting
                  gradual e prolongado, ideal para tratar flacidez e perda de
                  volume.
                </li>
                <li className="pt-2">
                  <b>Hidroxiapatita de cálcio (Radiesse)</b>: Estimula a
                  produção de colágeno e promove um efeito lifting imediato.
                </li>
              </ul>
            </ListItem>
            <ListItem title="Exion">
              O Exion é um dispositivo de última geração da BTL Aesthetics que
              oferece uma abordagem completa para tratamentos de pele. Com
              múltiplas tecnologias e aplicadores, ele permite personalizar os
              tratamentos para cada paciente e suas necessidades específicas .O
              Exion utiliza radiofrequência fracionada para estimular a produção
              de colágeno e elastina, promovendo a renovação celular e
              melhorando a textura e o tônus da pele. Principais benefícios do
              Exion:
              <ul className="pl-4 pt-2">
                <li>
                  <b>Versatilidade</b>: Trata uma ampla gama de condições da
                  pele, desde rugas e flacidez até cicatrizes e estrias.
                </li>
                <li className="pt-2">
                  <b>Precisão</b>: A tecnologia inteligente garante uma
                  aplicação precisa e uniforme da energia, minimizando o
                  desconforto.
                </li>
                <li className="pt-2">
                  <b>Eficácia</b>: Resultados visíveis em diversas áreas do
                  corpo, com menos tempo de recuperação.
                </li>
                <li className="pt-2">
                  <b>Personalização</b>: Tratamentos personalizados para cada
                  paciente, com diferentes níveis de energia e profundidade.
                </li>
              </ul>
            </ListItem>
            <ListItem title="Lumecca">
              A Lumecca é um dos equipamentos de luz pulsada intensa (IPL) mais
              poderosos do mercado, desenvolvido pela InMode. Esta tecnologia é
              utilizada para tratar diversas condições da pele, como:
              <ul className="py-2 pl-4">
                <li>
                  <b>Manchas</b>: Melasma, sardas, manchas de sol e outras
                  discromias.
                </li>
                <li className="pt-2">
                  <b>Vasinhos</b>: Telangiectasias e rosácea.
                </li>
                <li className="pt-2">
                  <b>Envelhecimento</b>: Rugas finas, textura irregular e danos
                  causados pelo sol.
                </li>
                <li className="pt-2">
                  <b>Outros</b>: Acne ativa e cicatrizes de acne.
                </li>
              </ul>
              A Lumecca emite pulsos de luz intensa que penetram na pele,
              quebrando a melanina (pigmento) e a hemoglobina (presente nos
              vasos sanguíneos). Isso leva à redução das manchas, vasinhos e
              outros problemas de pigmentação, estimulando a produção de
              colágeno e elastina, o que resulta em uma pele mais firme e
              rejuvenescida. Os resultados são rápidos e eficazes, em apenas
              algumas sessões, é possível notar uma melhora significativa na
              aparência da pele.
            </ListItem>
            <ListItem title="Vasculaze">
              O Vasculaze é um equipamento de última geração da InMode,
              especialmente desenvolvido para o tratamento de lesões vasculares.
              Essa tecnologia utiliza a energia do laser para coagular os vasos
              sanguíneos afetados, promovendo sua absorção pelo organismo e
              eliminando a aparência de derrames.
              <div className="pt-2"></div>
              Indicações:
              <ul className="py-2 pl-4">
                <li>
                  <b>Varizes</b>: Veias dilatadas e tortuosas, geralmente nas
                  pernas.
                </li>
                <li className="pt-2">
                  <b>Aranhas vasculares</b>: Pequenos vasos sanguíneos
                  dilatados, com aparência de teias de aranha.
                </li>
                <li className="pt-2">
                  <b>Angiomas</b>: Tumores benignos formados por vasos
                  sanguíneos.
                </li>
                <li className="pt-2">
                  <b>Telangiectasias</b>: Dilatação de pequenos vasos sanguíneos
                  na pele.
                </li>
              </ul>
            </ListItem>
            <ListItem title="Peeling químico">
              O peeling químico é um tratamento que utiliza ácidos para remover
              as camadas superficiais da pele. Essa renovação estimula o
              crescimento de novas células, deixando a pele mais lisa, uniforme
              e com menos manchas e rugas. Tem diversas indicações como manchas,
              acne, rugas e textura da dele. Pode ser superficial, médio ou
              profundo. O ácido aplicado causa uma descamação controlada,
              removendo as células danificadas.
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

      <ContactCTA />

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
