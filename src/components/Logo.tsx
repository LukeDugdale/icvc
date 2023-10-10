import { useId } from 'react'
import Image from 'next/image'
import logo from '../images/ICVClogowhite.png'
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <div>
      <Image alt='' style={{width:'10rem'}} src={logo}/>
    </div>
  )
}
