import './Navbar.css'
import bag from './imagens/bag.png'
import seta from './imagens/seta.png'

function Bag() {
  const abrir = () =>{
    if (document.getElementById('Bag').style.display == 'none') {
      document.getElementById('Bag').style.display = 'flex'
      document.getElementById('contact').style.display = 'none'
      document.getElementById('profile').style.display = 'none'
      document.getElementById('seta-B').style.rotate = '-90deg'
      document.getElementById('seta-C').style.rotate = '90deg'
      document.getElementById('seta-P').style.rotate = '90deg'
      }
      else{
      document.getElementById('Bag').style.display = 'none'
      document.getElementById('seta-B').style.rotate = '90deg'
      }
  }
  return (
    <div>
        <button className='botoes' onClick={abrir}>
        <img className='icons' src={bag} alt="" />
        <img className='seta' id='seta-B' src={seta} alt="" />
        
        </button>

        <div className="Bag" id='Bag'>
          <a href="sad">Carrinho</a>
          <a href="sad">Favoritos</a>
          <a href="sad">Em Andamento</a>
        
        </div>



        
    </div>

  )
  
  }



export default Bag