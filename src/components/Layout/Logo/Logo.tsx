import konectaLibras from '/assets/icons/konecta-libras.svg'

export function Logo () {
  return (
    <>
      <img src={konectaLibras} alt="Konecta LIBRAS" width="150"  className="w-32 sm:w-36 absolute left-1/2 -translate-x-1/2"/>
    </>
  )
}