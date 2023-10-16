 import React from "react";
import {BrowserRouter,Routes,Route} from  "react-router-dom";
import Fitpeo from "./dash";
import Mainelement from "./main";
 

class Dashboard extends React.Component{
    render(){
        return(<>
        <Fitpeo/>
        <Mainelement/>
         </>)
    }
}

class Product extends React.Component{
    render(){
        return(<>
        <Fitpeo/>
        <h1>This is product page.</h1></>)
    }
}
class Customers extends React.Component{
    render(){
        return(<> <Fitpeo/>
        <h1>This is customers page.</h1></>)
    }
}
class Income extends React.Component{
    render(){
        return(<> <Fitpeo/>
        <h1>This is income page.</h1></>)
    }
}
class Promote extends React.Component{
    render(){
        return(<><Fitpeo/>
        <h1>This is promote page.</h1></>)
    }
}
class Help extends React.Component{
    render(){
        return(<> <Fitpeo/>
        <h1>This is help page.</h1></>)
    }
}


 export default function Bind (){
    return (<><BrowserRouter>
    <Routes>
        <Route path="/" element={Dashboard}/>
        <Route path="/product" element={Product}/>
        <Route path="/customers" element={Customers}/>
        <Route path="/income" element={Income}/>
        <Route path="/promote" element={Promote}/>
        <Route path="/help" element={Help}/>
        
    </Routes>
        
        </BrowserRouter>
    </>)
}