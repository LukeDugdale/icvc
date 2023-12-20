import { useId } from 'react'

import { Button } from '@/components/Button'
import Image from 'next/image'
import plugLogo from '../images/Plug3.png'
export function SignUpForm() {
  let id = useId()

  return (
    <form className="relative  gap-2 isolate mt-8 flex items-center pr-1">
     
      
      <Button className='flex bg-white/10 text-neutral-100' type="submit" href={'https://plugwallet.ooo'}>
        <Image alt='' className='mr-2' style={{height:'1rem', width:'1rem'}} src={plugLogo} />
        Connect wallet
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <Button type="submit" href={'https://identity.ic0.app/#authorize'}>
        Sign in with Internet Identity
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      
    </form>
  )
}
