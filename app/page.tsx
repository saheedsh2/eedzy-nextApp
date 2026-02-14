import { UserButton } from '@clerk/nextjs'


export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h2>Subscribe</h2>
    </div>
  )
}
