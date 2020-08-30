import React,{Component} from 'react'

import './Plans.css';

const plan={
    first:{
        name:'BASIC',
        price:'FREE',
        description:[
            'Know Where To Watch','Watch Free Content','WatchNet'
        ]
    },
    second:{
        name:'BASIC +',
        price:400,
        description:[
            'LiveTV','Music','Gaming','Watch New Content'
        ]
    },
    third:{
        name:'PREMIUM',
        price:800,
        description:[
            'Free Subscription on Oho','Sooper Content','Streaming Services','WatchNet'
        ]
    },
    forth:{
        name:'SOOPER PREMIUM',
        price:1000,
        description:[
            'Free Subscription on Oho','Sooper Content','Streaming Services','WatchNet'
        ]
    }
}

class Plans extends Component{
    state={
        def:[0,0,0,0]
    }
    
    clickHand=(index)=>{
        console.log('hello')
        let new_def=this.state.def
        new_def.map((i,ind) => {
            if(ind===index){
                new_def[ind]=1;
            }
            else new_def[ind]=0;
            return ind
        })
        this.setState({def:new_def})
    }
   
    render(){

   
        return(
            <div style={{backgroundColor:'#1a1927', position:'absolute',right:0,left:0,top:0,bottom:0,overflowY:'auto'}}>
            <div className='Parent-div'>
                {
                    Object.values(plan).map((i,index) => {
                        return(
                            <div className={this.state.def[index]===1?'Sel_Child-div':'Child-div'} key={index} onClick={()=>this.clickHand(index)}>
                                {console.log(i)}
                                    {this.state.def[index]===1 &&  
                                     <div >
                                         <img src={require("../tick.png")} alt="Loading.." width="20px" height="20px" style={{position:'absolute',left:-10,top:-10}}/>
                                     </div>
                                     }

                                    <div className='Both'>
                                        <div className='Name'>
                                            <p className='NameP'> {i.name}</p>
                                        </div>

                                        <div className='Price'>
                                            {
                                                index===0?<p className='PriceP'>{i.price}</p>: <p className='PriceP'>&#8377;{i.price}</p>
                                            }
                                           
                                        </div>
                                    </div>

                                    <div className='Text-P'>
                                        {
                                        index!==0?<p> monthly paid annually at abc </p>:<p></p>
                                        }
                                    </div>
                                    
                                    <div className='Desc'>
                                        {
                                            i.description.map((item,k) => {
                                                return(
                                                    <div className='Desc-P'>
                                                <p style={{marginLeft:'20px',color:'#8c8c90'}} key={k}> &#9658;   {item}</p>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                
                                

                                <div className={this.state.def[index]===1?'Sel_Buttn':'Buttn'} style={{alignItems:'center'}} onClick={()=>this.clickHand(index)}>
                                    <p style={{flex:1}}>Select Plan</p>
                                </div>
                            </div>
                        )
                    })

                    
                }
            </div>
            </div>
        )
    }
}

export default Plans