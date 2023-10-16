import React from "react";
 

 
 

   
  


export default class Mainelement extends React.Component{
    constructor(){
        super();
        this.state={input:""}
        this.handleEvent=this.handleEvent.bind(this);
        this.slide=this.slide.bind(this);

    }
    
    handleEvent( ){
        let arr=["bar1","bar2","bar3","bar4","bar5","bar6","bar7","bar8","bar9","bar10","bar11","bar12"];
        for(let i=0;i<arr.length;i++){
            let r=Math.random();
            if(r<0.1){
                r*=10;
            }
           let x=Math.floor(r*25);
            
           document.getElementById(arr[i]).style.height=x+"vh";
        }
        let m=new Date();
        let mon=m.getMonth();
       
        document.getElementById(arr[mon]).style.opacity="initial";
        
    

    }
    slide(){
        
            document.getElementById("slideleft").style.left="0px";
        
    }
  
    render(){
        return (<>
        <div id="layout2">
        <div id="greeting">
        <span id="burger" onClick={this.slide}><i class="fa-solid fa-bars"></i></span><h3>Greetings Fitpeo (●'◡'●),</h3>
               <label><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search" id="search"/></label>
        </div>
        <div id="fourguys">
        <div id="box">
        <div id="inner-box" style={{backgroundColor:"lightgreen"}}><i class="fa-solid fa-sack-dollar" style={{color:"green" }}></i></div><div id="inner-box"><p>Earning</p>
        <h3>$198k</h3><p><span id="inc"><i class="fa-solid fa-arrow-up"></i>37.8%</span> this month</p></div></div>
            <div id="box"><div id="inner-box" style={{backgroundColor:"#f1d0f1"}}><i class="fa-solid fa-book" style={{color:"violet"}}></i></div><div id="inner-box"><p>Orders</p><h3>$ 2.4k</h3><p><span id="dec"><i class="fa-solid fa-arrow-down"></i> 2%</span> this month</p></div></div>
            <div id="box"><div id="inner-box" style={{backgroundColor:"#c7d6e5"}}><i class="fa-solid fa-wallet" style={{color:"#308ced"}}></i></div><div id="inner-box"><p>Balance</p><h3>$ 2.4k</h3><p><span id="dec"><i class="fa-solid fa-arrow-down"></i> 2%</span> this month</p></div></div>
            <div id="box"><div id="inner-box" style={{backgroundColor:"#f3cad1"}}><i class="fa-solid fa-bag-shopping" style={{color:"#f31d43"}}></i></div><div id="inner-box"><p>Total Sales</p><h3>$ 89k</h3><p><span id="inc"><i class="fa-solid fa-arrow-up"></i> 11%</span> this week</p></div></div>
            
        </div>
        <div id="twoguys">
            <div id="overview"><div id="info"><div ><h3>Overview</h3><p>Monthly earning</p></div><div><select style={{backgroundColor:"rgba(231, 227, 227, 0.938)"}} id="sel" onChange= { this.handleEvent}  >
                <option >Quarterly</option><option>Half</option><option>Yearly</option><option>All time</option></select></div></div>
                <div id="bars"   >
                <div id="add"> <div class="bar"><div id="bar1" ></div> </div><div id="month">Jan</div></div>
	<div id="add"><div class="bar"><div id="bar2" ></div> </div><div id="month">Feb</div></div>
	<div id="add"><div class="bar"><div id="bar3" ></div> </div><div id="month">Mar</div></div>
	<div id="add"><div class="bar"><div id="bar4" ></div> </div><div id="month">Apr</div></div>
	<div id="add"><div class="bar"><div id="bar5" ></div> </div><div id="month">May</div></div>
	<div id="add"><div class="bar"><div id="bar6" ></div> </div><div id="month">Jun</div></div>
	<div id="add"><div class="bar"><div id="bar7" ></div> </div><div id="month">Jul</div></div>
	<div id="add"><div class="bar"><div id="bar8" ></div> </div><div id="month">Aug</div></div>
	<div id="add"><div class="bar"><div id="bar9" ></div> </div><div id="month">Sep</div></div>
	<div id="add"><div class="bar"><div id="bar10"></div></div> <div id="month">Oct</div></div>
	<div id="add"><div class="bar"><div id="bar11"></div></div> <div id="month">Nov</div></div>
	<div id="add"><div class="bar"><div id="bar12"></div></div> <div id="month">Dec</div></div>

                </div>
                </div>
            <div id="customers"><div><h3>Customers</h3>
            <p>Customers that buy products</p></div>
            <div id="circle">
                <div id="circle1"><div id="circle2"><h6>65% Total New Customers</h6><div id="colordiv"></div></div></div>
                
            </div>
            </div>
        </div>
        <div id="oneguy">
           
                <div id="product">
                    <div id="box1"><h3>Product Sell</h3>
                 </div><div id="search"><label><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search"  id="search" style={{backgroundColor:"rgba(231, 227, 227, 0.938)",width:"12vw"}} /></label>
                    </div><div id="option"><select id="sel" style={{backgroundColor:"rgba(231, 227, 227, 0.938)"}}><option>Last Week</option><option>Last 30days</option><option>Last 3 months</option></select></div>
                    </div>
                    <div id="container">
                        <div id="cols">
                            <div id="name"><p>Product Name</p></div><div id="list"><ul><li>Stock</li><li>Price</li><li>Total Sales</li></ul></div>

                        </div>
                        <hr/>
                       
                        <div id="rows">
                            <div id="name"><p>Abstract D</p></div><div id="list"><ul><li>32 in stock</li><li>$ 45.99</li><li>20</li></ul></div>

                        </div>
                        <div id="rows">
                            <div id="name"><p>Sarphens Illustrtion</p></div><div id="list"><ul><li>32 in stock</li><li>$ 45.99</li><li>20</li></ul></div>

                        </div>
                    </div>

                     
           


        </div>

        </div>

        
        </>)
    }
}