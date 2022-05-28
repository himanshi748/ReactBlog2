import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Bollywood from './components/Bollywood';
import Home from './components/Home';
import ApiAll from './components/APIs/ApiAll';
import ApiBolly from './components/APIs/ApiBolly';
import Technology from './components/Technology';
import ApiTech from './components/APIs/ApiTech';
import Travel from './components/Travel';
import ApiTravel from './components/APIs/ApiTravel';
import Fitness from './components/Fitness';
import ApiFit from './components/APIs/ApiFit';
import {Link} from 'react-router-dom'



function App() {
  
  return (
    
    <ApiAll>
    <ApiBolly>
    <ApiTech>
    <ApiTravel>
    <ApiFit>
   
      
      <BrowserRouter>
      
      <h1  className='mt-5 text-center'><span>The</span>Siren</h1>
<br/>
        <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>
            <Link to={'/'}><button className='btn btn-light btn-lg'>Home</button></Link >
            
            <Link to={'/bollywood'}><button className='btn btn-light btn-lg'>Bollywood</button></Link>

            <Link to={'/technology'}> <button className='btn btn-light btn-lg'>Technology</button></Link>

            <Link to={'/travel'}>  <button className='btn btn-light btn-lg'>Travel</button></Link>

            <Link to={'/fitness'}><button className='btn btn-light btn-lg'>Fitness</button></Link>

            </div>
            <hr/>
            
         
            
        </div>


     <Routes>
     
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path='/Travel' element={<Travel/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
    
      </Routes>
    </BrowserRouter>



    {/* latest post */}
    <>

    <div className='box'>

    <h1 className='post-head'>Latest Post</h1>
    <div className="card">
  <div className="card-header">
    Technology
  </div>
  <div className="card-body">
    <h5 className="card-title">Mini Gadget</h5>
    <br/>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed laborum vitae quo obcaecati nobis ratione consectetur placeat ducimus, minus maiores veniam incidunt officia odit molestias ipsa quasi debitis natus. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!</p>
    <button className="btn btn-primary">Link</button>
  </div>
</div> 

<br/>

<div className="card">
  <div className="card-header">
    CRICKET
  </div>
<div className="card-body">
    <h5 className="card-title">Live T20 Cricket-</h5>
    <br/>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium sequi vitae voluptates voluptatibus, aspernatur, ullam pariatur recusandae, iste officia ducimus libero dolorem delectus consequuntur doloribus cum eligendi dicta deserunt.. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!</p>
    <button className="btn btn-primary">Link</button>
  </div>
  </div>

  <br/>

  <div className="card">
  <div className="card-header">
    LIFESTYLE
  </div>
<div className="card-body">
    <h5 className="card-title">Buy Life Style Product</h5>
    <br/>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laudantium ea. Fugit labore minus exercitationem quis deleniti sunt totam repudiandae! Iure, nesciunt est! Exercitationem a, voluptatum nihil optio ea animi! <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!</p>
    <button className="btn btn-primary">Link</button>
  </div>
  </div>

  <br/>

  <div className="card">
  <div className="card-header">
    SPACE
  </div>
<div className="card-body">
    <h5 className="card-title">Star Galaxy</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim, tempora recusandae, saepe pariatur impedit dicta perspiciatis odit aut sed voluptates eos perferendis aperiam corrupti officia incidunt. Saepe, inventore dicta? <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!</p>
    <button className="btn btn-primary">Link</button>
  </div>
  </div>
  <br/><br/>
 
    </div>  
            </>

    </ApiFit>
    </ApiTravel>
    </ApiTech>  
    </ApiBolly>
    </ApiAll>




  )
}

export default App
