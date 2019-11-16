import React from 'react';
import css from '../styles/App.css';
import {Tabs, Tab} from 'react-bootstrap'
import{Link} from 'react-router-dom'
import Select from 'react-select';

const options = [
  { value: 'bank', label: 'ICICI' },
  { value: 'bank1', label: 'SBI' },
  { value: 'bank2', label: 'HDFC' },
  { value: 'bank3', label: 'CITI Bank' }
];

 class CustomTab extends React.Component{
    constructor(props){
        super(props)
        this.state={
          select:[]
        }
    }
     
    handleChangeSelect=(option)=>{
     const {select}=this.state
      
     this.setState({
       select:option
     },()=>{
      console.log('select',select)
     })
    }
        
    // handleSelect=(key)=>{
    //  console.log('key',key)
    //  switch(key){
    //    case 1: this.props.history.push('/fetch')
    //     break;
    //    default:
    //     this.props.history.push('/') 
    //  }
    // }

    render(){
      const {select}=this.state
        return(
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example"  >
                <Tab eventKey="1" title="Home">
                    aaa
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <Select
                    options={options}
                    value={select}
                    onChange={this.handleChangeSelect}                        
                    isMulti
                    />
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                  <Link to="/register" >Register</Link>
                </Tab>
              </Tabs>
        )
    }
}
export default CustomTab
