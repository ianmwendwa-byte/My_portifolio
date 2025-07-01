import {NAV_LINKS, SITE } from '../Constants'

const Navbar = () => {
  return (
    <nav className='bg-emerald-950 text-white py-4 px-4 flex items-center justify-between'>
      <div>{SITE.name}</div>
      <div>
        <ul className='list-none flex gap-6'>
            {NAV_LINKS.map((link,index)=>(
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
        </ul>
      </div>
      <div>
       
      </div>

    </nav>
  )
}

export default Navbar