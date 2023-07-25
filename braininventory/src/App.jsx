import { useState } from 'react'
import './App.css'
import TinyChart from './Components/TinyChart'
import Chart from './Components/Chart'
import Donut from './Components/Donut'
import earth from '../src/Image/country.png'
import demo from '../src/Image/me.png'
import avtar from '../src/Image/corner.png'

function App() {
    
    return (
        <>
            <div className='containerparent'>
                <div className='mainContainer container p-5'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <div>
                            <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#643edf' }}>Covid-19</span> <br />
                            <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'grey', position: 'relative', bottom: '1vh' }}>Live Traker Dashboard</span>
                        </div>

                        <div style={{ display: 'flex', height: '7vh', justifyContent: 'space-between', width: '23%', backgroundColor: 'white', borderRadius: '50px', padding: '0.5vh', boxShadow: '0px 2px 9px -5px grey' }} className='searchbox'>
                            <input style={{ border: 'none', marginLeft: '2vh', borderRadius: '10px', outline: 'none' }} className='searchInput' placeholder='Search' type='text' />
                            <div className="input-group-append"><button className="btn">
                                <i className="fas fa-search"></i>
                            </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: '', alignItems: 'center' }} className='bellDiv'>
                            <div>
                                <img style={{ marginRight: '3vh', borderRadius: '50%', objectFit: 'cover', width: '18%' }} src={demo} />
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                            <div>
                                <i style={{ marginRight: '5vh' }} class="fa-regular fa-bell"></i>
                                <i class="fa-solid fa-right-from-bracket"></i>
                            </div>
                        </div>
                    </div>


                    <div className='row mt-3 d-flex'>
                        <div className='col-md-9'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='d-flex chartbox'>
                                        <TinyChart color={'#03c3fb'} />
                                        <div style={{ display: 'flex' }}>
                                            <div className='text-center'>
                                                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#03c3fb' }}>1.208,087</span>
                                                <br />
                                                <span style={{ fontSize: '1rem', fontWeight: '700' }}>Cases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='d-flex chartbox'>
                                        <TinyChart color={'#e64236'} />
                                        <div style={{ display: 'flex' }}>
                                            <div className='text-center'>
                                                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#e64236' }}>1.208,087</span>
                                                <br />
                                                <span style={{ fontSize: '1rem', fontWeight: '700' }}>Death</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='d-flex chartbox'>
                                        <TinyChart color={'#8dc934'} />
                                        <div style={{ display: 'flex' }}>
                                            <div className='text-center'>
                                                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#8dc934' }}>1.208,087</span>
                                                <br />
                                                <span style={{ fontSize: '1rem', fontWeight: '700' }}>Recovered</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div style={{ padding: '3vh', borderRadius: '1rem', backgroundColor: 'white' }}>
                                <div>
                                    <span style={{ fontWeight: '700' }}>Live Update</span>
                                    &nbsp;
                                    <span style={{ fontSize: '10px' }}>1 min ago</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#03c3fb' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>2 new cases in Pakistan</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#03c3fb' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>4 new cases in Singapur</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#03c3fb' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>2 new cases in Thailand</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#03c3fb' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>5 new cases in Taiwan</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#03c3fb' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>8 new cases in Japan</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#03c3fb' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>1 new cases in Brazil</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#e64236' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>1st cases in Ecuador</span>
                                </div>
                                <div style={{ display: 'flex', marginTop: '3vh', alignItems: 'center' }}>
                                    <i style={{ fontSize: '10px', color: '#e64236' }} class="fa-sharp fa-solid fa-circle"></i>
                                    <span className='casesin'>1st cases in Maxico</span>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div style={{ backgroundColor: '#f9fdff' }}>
                                    <img style={{ width: '100%', cursor: 'pointer' }} src={avtar} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '-82vh' }}>
                        <div className='row mt-3'>
                            <div className='col-md-9'>
                                <div style={{ backgroundColor: 'white', display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'absolute', padding: '2%', top: '0px' }}>
                                        <div>
                                            <span style={{ fontWeight: '600' }}>Covid-19 Statistics</span><br />
                                            <span style={{ fontSize: '0.7rem', position: 'relative', bottom: '3px' }}>as of 05 April 2020, 09:41 PM</span>
                                        </div>
                                        <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <i style={{ fontSize: '10px', color: '#e64236' }} class="fa-sharp fa-solid fa-circle"></i>
                                                <span style={{ marginLeft: '2vh' }}>Death</span>
                                            </div>
                                            <div>
                                                <i style={{ fontSize: '10px', color: '#8dc934' }} class="fa-sharp fa-solid fa-circle"></i>
                                                <span style={{ marginLeft: '2vh' }}>Recovery</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '0', height: '300px' }} className='d-flex'>
                                        <Chart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ position: 'relative', borderBlockColor: 'white' }} className='row mt-3'>
                            <div className='col-md-9 d-flex'>
                                <div style={{ backgroundColor: 'white', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem', display: 'flex', justifyContent: 'space-between' }} className='col-md-6 p-3'>
                                    <div>
                                        <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>World Map</span> <br />
                                        <span className='counttyName'>USA</span> <br />
                                        <span className='counttyName'>Span</span><br />
                                        <span className='counttyName'>Itly</span><br />
                                        <span className='counttyName'>Germany</span><br />
                                        <span className='counttyName'>France</span><br />
                                        <span className='counttyName'>China</span><br />
                                    </div>
                                    <div>
                                        <Donut />
                                    </div>
                                </div>
                                <div style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }} className='col-md-6 p-3'>
                                    <img style={{ objectFit: 'cover', width: '85%', borderRadius: '1rem' }} src={earth} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
