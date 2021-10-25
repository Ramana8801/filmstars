import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Krishna(){
  return(
    <div>
         <h1>Krishna</h1>
      <p>Born: May 31, 1944 in Burripalem, Guntur, Madras Presidency, British India</p>
<p>Birth Name :Ghattamaneni Siva Rama Krishna</p>
<p>Nicknames :Super Star,Nata Shekara</p>
<h1>BIO</h1>
<p>Krishna was born to Veeraraghavayya Chowdhary and Nagaratnamma Ghattamaneni in a remote village called Burripallem, near Tenali in Guntur district, Andhra Pradesh, India. He was the eldest of the five children from a middle income agrarian family. He could not afford to have convent education, so he attended the school in his village to get his primary education before moving to Tenali and Narsapur to do his S.S.C and Intermediate. Impressed by his scholastic achievements, his father raised money to send his son to the prestigious C.R.R. college in Eluru. There, he shared a room with two aspiring actors, Shoban Babu and Murali Mohan, who later became stars in their own right. Krishna played an active role in various cultural events organized by his college. His performance in the play "Cheesina Paapam Kaasiki Velleena" brought him critical acclaim, thus encouraging him to pursue acting more seriously. After he graduated from college, he married Indira Devi on November 1, 1962.</p>
      <Link to="/krishnaphotos"><Button><h1>Photos</h1></Button></Link>
      
      </div>
  )
}