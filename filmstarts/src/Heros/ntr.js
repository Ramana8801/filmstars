import React from 'react';
import { Link,Route } from 'react-router-dom';
import Ntrphoto from '../photos/ntrphotos';

export default function Ntr(){
  return(
    <div>
      <h1>Jr.Ntr</h1>
      <p>Born :May 20, 1983 in Hyderabad, Andhra Pradesh, India</p>
<p>Birth Name : Nandamuri Taraka Ram</p>
<p>Nicknames :Tarak,Young Tiger,Thalaivaa,Young Tiger NTR</p>
<p>Height    5' 9¾" (1.77 m)</p>
      <h1>BIO</h1>
      <p>Known for his action star persona, N.T. Rama Rao Jr. , commonly referred to as Tarak or Jr NTR is the grandson of legendary Telugu actor and politician N.T. Rama Rao. Tarak is the most successful star from Nandamuri family working in the Telugu film industry.

Tarak was born on 20th May 1983 in Hyderabad, Andhra Pradesh (currently in Telangana), India to Harikrishna Nandamuri and Shalini Rao. Tarak learnt the Kuchipudi dance form in his early childhood and gave many stage performances in India and abroad.

Tarak was selected by acclaimed Telugu director Gunasekhar to star as the mythological character Lord Ram in the children's film Ramayanam (1996), marking his debut in movies. After starring in a few TV serials, he made his adult debut in movies with Ninnu Choodalani (2001) directed by V.R. Pratap. He has since then starred in over thirty movies in leading roles. He is the recipient of two Filmfare Awards, two Nandi awards and four CineMAA awards.</p>
    <Link to="/ntrphotos"><button> <h1>photos</h1></button></Link>
    
      </div>
  )
}