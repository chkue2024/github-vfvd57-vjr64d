
import banner from './assets/logo_dashboard.jpg'
import {createSignal} from 'solid-js'
import Card from './components/Card';

function App(){
  return(
   <div class= "container m-auto">
     <header
       class="my-4 p-2 text-x1 flex items-center gap-4"
     >
      <h1>Digital Nutrition Management</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner"/>
     

      <div class="grid grid-cols-4 gap-10 my-4">
      <Card> 
        <h2>Male user</h2>
        <button class="btn" >Click here  
          </button>
          <p> Acutally 1752 </p>
      </Card>
      <Card> 
        <h2>Female user</h2> 
        <button class="btn" >Click here  
          </button>
          <p> Acutally 652 </p>
      </Card>
      <Card> 
        <h2>Average time of use</h2> 
        <button class="btn" >Click here  
          </button>
          <p> 3h </p>
      </Card>
      <Card> 
       <h2>Self-Anamnesis</h2> 
       <button class="btn" >Click here  
          </button>
          
      </Card>
      <Card> 
        <h2>Nutritional intolerances</h2>
        <button class="btn" >Click here  
          </button>
          <p> Overview lastly updated 3 minutes ago </p>
      </Card>
      <Card> 
        <h2>Bloodglucose level</h2>
        <button class="btn" >Click here  
          </button>
          <p> 85 mg/dl </p>
      </Card>
      <Card> 
       <h2>User Satisfaction</h2> 
       <button class="btn" >Click here  
          </button>
          
      </Card>
      <Card> 
        <h2>Nutritional Shopping assistant</h2>
        <button class="btn" >Click here  
          </button>
          <p> New alternatives for lactose intolerances are updated </p>
      </Card>
      </div>
     
   </div>
  );
}

export default App;
