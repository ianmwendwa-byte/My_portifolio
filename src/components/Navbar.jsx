import {NAV_LINKS, SITE, SOCIAL_LINKS } from '../Constants'

const Navbar = () => {
  return (
    <nav className='bg-background text-text py-4 px-4 flex items-center justify-between'>
      <div>{SITE.name}</div>
      <div>
        <ul className='flex gap-6'>
            {NAV_LINKS.map((link,index)=>(
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <ul className='flex gap-4'>
        {SOCIAL_LINKS.map((SOCIAL_LINK,index)=>(
          <li key={index}>
            <a href={SOCIAL_LINK.url} target='_blank' rel="noopener noreferrer">
              <SOCIAL_LINK.icon/>
              </a>
          </li>
        ))}
        </ul>
       
      </div>

    </nav>
  )
}

export default Navbar