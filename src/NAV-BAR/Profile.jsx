import './Navbar.css'
import prfile from './imagens/profile.png'
import seta from './imagens/seta.png'

function Profile() {
  const abrir = () =>{
    if (document.getElementById('profile').style.display == 'none') {
      document.getElementById('profile').style.display = 'flex'
      document.getElementById('contact').style.display = 'none'
      document.getElementById('Bag').style.display = 'none'
      document.getElementById('seta-P').style.rotate = '-90deg'
      document.getElementById('seta-C').style.rotate = '90deg'
      document.getElementById('seta-B').style.rotate = '90deg'
      }
      else{
      document.getElementById('profile').style.display = 'none'
      document.getElementById('seta-P').style.rotate = '90deg'
      }
  }
  return (
    <div>
        <button className='botoes' onClick={abrir}>
        <img className='icons' src={prfile} alt="" />
        <img className='seta' id='seta-P' src={seta} alt="" />
        
        </button>

        <div className="profile" id='profile'>
          <a href="sad">Meu Perfil</a>
          <a href="sad">Minhas compras</a>
          <a href="sad">Sobre Nós</a>
          <a href="sad">Sair</a>
        
        </div>



        
    </div>

  )
  
  }



export default Profile
