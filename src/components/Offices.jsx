import clsx from 'clsx'

function Office({ name, note, children, invert = false }) {
  return (
    <div>
      <address
        className={clsx(
          'text-sm not-italic',
          invert ? 'text-neutral-300' : 'text-neutral-600',
        )}
      >
        <strong className={invert ? 'text-white' : 'text-neutral-950'}>
          {name}
        </strong>
        <br />
        {children}
        <p className="mt-4">
          <i>{note}</i>
        </p>
      </address>
    </div>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office
          name="ArtMed Clinic"
          invert={invert}
          note="* sujeito a marcação"
        >
          Rua Senhor do Bonfim 5
          <br />
          Ponte de Lima
          <br />
          Seg a Sab, das 9h às 19h*
        </Office>
      </li>
    </ul>
  )
}
