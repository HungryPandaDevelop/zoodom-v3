import inst from 'front-end/images/social/instagram-blue.svg'
import ok from 'front-end/images/social/ok-blue.svg'
import ru from 'front-end/images/social/ru-blue.png'
import tw from 'front-end/images/social/twitter-blue.svg'
import vk from 'front-end/images/social/vk-blue.svg'
import youtube from 'front-end/images/social/youtube-blue.svg'
import facebook from 'front-end/images/social/facebook-blue.svg'

const SocialContacts = ({ listing }) => {
  return (
    <div className='social'>
      {listing.inst && <a href={listing.inst}><img src={inst} alt="inst" /></a>}
      {listing.odn && <a href={listing.odn}><img src={ok} alt="ok" /></a>}
      {listing.rutube && <a href={listing.rutube}><img src={ru} alt="rutube" /></a>}
      {listing.tw && <a href={listing.tw}><img src={tw} alt="tw" /></a>}
      {listing.vk && <a href={listing.vk}><img src={vk} alt="vk" /></a>}
      {listing.youtube && <a href={listing.youtube}><img src={youtube} alt="youtube" /></a>}
      {listing.facebook && <a href={listing.facebook}><img src={facebook} alt="facebook" /></a>}

    </div>
  )
}

export default SocialContacts
