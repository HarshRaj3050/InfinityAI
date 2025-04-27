import React from 'react'
import "./Main.css"
import { useContext } from 'react';
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);


    return (
        <div className='main'>
            <div className="nav">
                <p>Infinity AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, User.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beuatiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </> : <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ?
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                    </div>
                </div>}


            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt here' />
                    <div>
                        <img className='search-icons' src={assets.gallery_icon} alt="" />
                        <img className='search-icons' src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>Infinity AI may display inaccurate info, including about people, so double-check its responses. Develop By Harsh.</p>
            </div>
        </div>
    )
}

export default Main