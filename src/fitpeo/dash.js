import React from "react";
import Mainelement from "./main";
const menu=[
    {title:"Dashboard",icon:<i class="fa-solid fa-gauge-high"></i>},
    {title:"Product",icon:<i class="fa-solid fa-cube"></i>},{
        title:"Customers",icon:<i class="fa-solid fa-address-book"></i>
    },{
        title:"Income",icon:<i class="fa-solid fa-wallet"></i>
    },{
        title:"Promote",icon:<i class="fa-solid fa-percent"></i>
    },{
        title:"Help",icon:<i class="fa-solid fa-circle-info"></i>
    }
]

class Fitpeo extends React.Component{
    constructor(){
        super();
        this.state={title:"Dashboard",icon:<i class="fa-solid fa-bars-staggered"></i>}
         this.display=this.display.bind(this);
    }
      display(k,event){
        
         
        this.setState({title:menu[k].title });
        
        
         
        

        
    }
    
    
    
    render(){
      
        return (<>
        <div id="layout"><nav>
            <span></span>
            <h1 id="topguy"><span>{this.state.icon}</span><span id="tit">{this.state.title}</span>   </h1>
            <ul>{menu.map((item,index)=><li   onClick={(event)=>this.display(index,event) } key={index}  ><span >{item.icon}</span> <span  >{item.title}</span> <span>{" >"}</span></li>)}</ul>
            <div id="manager">
                 <div id="pic"> <i class="fa-solid fa-user-tie"></i></div>
                 <div id="details"><h3>Evaria</h3>
                 <p>Project Manager</p></div>
            </div>
            </nav>
        <Mainelement/>
        </div>
        </>)
    }
}

 
export default Fitpeo


