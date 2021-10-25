import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Prabhas(){
  return(
    <div>
      <h1>Prabhas raju</h1>
      <p>Born :October 23, 1979 in Madras, Tamil Nadu, India</p>
<p>Birth Name :Prabhas Raju Uppalapati</p>
<p>Nicknames :Darling,Bahubali</p>
<p>Height : 6' (1.83 m)</p>
<h1>BIO</h1>
<p>Prabhas was born to late U. Suryanarayana Raju and Siva Kumari. His family is from Mogalturu village and later moved to bhimavaram in West Godavari district, Andhra Pradesh. He is the youngest of three children, with an elder brother Pramod Uppalapati and sister Pragathi. He is the nephew of Telugu actor Uppalapati Krishnam Raju</p>
     <Link to="/prabhasphotos"><Button><h1>photos</h1></Button></Link>
      </div>
  )
}