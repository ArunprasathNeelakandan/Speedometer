import {Component} from 'react'
import './index.css'


class Speedometer extends Component {
    state = {speed:0}

    increase = () =>{
        const {speed} = this.state
        if (speed < 200){
            this.setState((perv)=>({speed:perv.speed+10}))
        }
        
    }

    decrease = () =>{
        const {speed} = this.state
        if (speed > 0 ){
            this.setState((perv)=>({speed:perv.speed-10}))
        }
        
    }

    render() {
        const {speed} = this.state
        return(
            <div className='bg'>
                <h1 className='head'>SPEEDOMETER</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png' alt='speedometer' className='img'/>
                <h3 className='head'>Speed is {speed}mph</h3>
                <p className='para'>Min Limit is 0mph, Max Limit iS 200mph</p>
                <div>
                <button className='btn1' onClick={this.increase}>Accelerate</button>
                <button className='btn2' onClick={this.decrease}>Apply Break</button>
                </div>
            </div>

        )
    }
}


export default Speedometer