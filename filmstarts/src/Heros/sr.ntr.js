import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Srntr(){
  return(
    <div>
         <h1>Rama Rao</h1>
      <p>Born : May 28, 1923 in Nimmakuru, Krishna District, Andhra Pradesh, India</p>
<p>Died  :January 18, 1996 in Hyderabad, India  (heart attack)</p>
<p>Birth Name : Nandamuri Taraka Rama Rao</p>
<p>Nicknames: NTR,Annagaru,Viswa Vikhyatha Nata Sarvabhouma</p>
<h1>BIO</h1>
<p>Born into a farmer's family, Rama Rao Taraka Nandamuri got his bachelors of arts degree and took a job with the government. Married to Nandamuri Basavatarakam, he began acting in films, his first being Mana Desam (1949), in which he played a police officer. His first movie as a hero was Palletoori Pilla (1950), which was a huge hit. His subsequent movies--Showkar (1950), Pathala Bhairavi (1951), Malliswari (1951) and Chandraharam (1953)--established him as the premier hero in the Telugu film industry. He acted in a mythological role as Lord Krishna for the first time in Mayabazar (1957) and acted in most of the major roles in "Ramayana" and "Mahabharatam", even in Tamil films. He acted in a total of 254 films, including some Tamil and Hindi films. He suffered some career reversals in the late 1960s and early 1970s, but came back with a bang in the late 1970s with some major hits like Adavi Ramudu (1977), Yamagola (1977), Vetagadu (1979). Some of his major hits in the early 1980s include Sardar Papa Rayudu (1980), Bobbili Puli (1982), Kondaveeti Simham (1981). He became the first superstar of the Telugu films a position which was held by Chiranjeevi till around 2001</p>
<Link to="/srntrphotos"><Button><h1>photos</h1></Button></Link>
</div>
  )
}