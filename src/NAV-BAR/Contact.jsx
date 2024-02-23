import './Navbar.css'
import telephone from './imagens/telephone.png'
import seta from './imagens/seta.png'

function Contact() {
  const abrir = () =>{
    if (document.getElementById('contact').style.display == 'none') {
      document.getElementById('contact').style.display = 'flex'
      document.getElementById('Bag').style.display = 'none'
      document.getElementById('profile').style.display = 'none'
      document.getElementById('seta-C').style.rotate = '-90deg'
      document.getElementById('seta-B').style.rotate = '90deg'
      document.getElementById('seta-P').style.rotate = '90deg'

      } 
    else{
      document.getElementById('seta-C').style.rotate = '90deg'
      document.getElementById('contact').style.display = 'none'
      }
  }
  return (
    <div>
        <button className='botoes' onClick={abrir}>
        <img className='icons' src={telephone} alt="" />
        <img className='seta' id='seta-C' src={seta} alt="" />
        
        </button>

        <div className="contact" id='contact'>
          <a href="sad">Contato</a>
          <a href="sad">Suporte</a>
          <a href="sad">Sobre Nós</a>
        
        </div>



        
    </div>

  )
  
  }



export default Contact
