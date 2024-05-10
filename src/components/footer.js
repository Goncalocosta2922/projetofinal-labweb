import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css'

function Footer() {
return (
    <div className='footer'>
        <div className='social'>
            <FacebookIcon/> <InstagramIcon/> <TwitterIcon/>
        </div>
        <p>Em caso de duvidas contacte-nos em marketplace@gmail.com ou 961228653</p>
    </div>

        
)
}

export default Footer