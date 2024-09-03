import {Component} from 'react'
import './index.css'


class FruitsCounter extends Component {
    state = {mango:0,banana:0}

    banana = () => {
        this.setState((perv)=>({...perv,banana:perv.banana+1 }))
    }

    mango = () => {
        this.setState((perv)=>({...perv,mango:perv.mango+1 }))
    }


    render() {
        const {mango,banana} = this.state
        return(
            <div className='bg'>
                <div className='cart'>
                    <h1 className='head'>Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas</h1>
                    <div className='fruit-cart'>
                        <div className='f-c'>
                            <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png' alt='mango' className='img'/>
                            <button onClick={this.mango} className='btn'>Eat Mango</button>
                        </div>
                        <div className='f-c'>
                            <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png' alt='banana' className='img'/>
                            <button className='btn' onClick={this.banana}>Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default FruitsCounter