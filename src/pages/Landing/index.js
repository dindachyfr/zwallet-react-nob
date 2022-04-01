import React from 'react'
import styles from './landing.module.css'
import Phone from '../../assets/phoneLanding.svg'
import PS from '../../assets/playstore.svg'
import AppStore from '../../assets/appstore.svg'
import MS from '../../assets/microsoft.svg'
import Dropbox from '../../assets/dropbox.svg'
import Hnm from '../../assets/hnm.svg'
import Airbnb from '../../assets/airbnb.svg'
import Canon from '../../assets/canon.svg'
import Dell from '../../assets/dell.svg'
import Phonecard from '../../assets/phonecard.svg'
import Padlock from '../../assets/padlockcard.svg'
import Download from '../../assets/downloadcard.svg'
import UserImage from '../../components/module/Navbar/NangIs-icon.svg'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
    const navigate = useNavigate()
    return (
        <main className={`bg-light ${styles.con} container-fluid g-0 w-100`}>
            <section className={`landing-1 p-lg-5 py-5 p-3 w-100`}>
                <nav className={`d-flex justify-content-between`}>
                    <h2 className={`${styles.textBlue}`}>Zwallet</h2>
                    <div className="d-flex buttons">
                        <div className={`${styles.buttonLog} ${styles.textBlue} fw-bold bg-transparent pointer py-2 px-4 me-3`}
                            onClick={() => navigate("/login")}>
                            Login</div>
                        <div className={`${styles.buttonRegs} text-white fw-bold py-2 px-4 pointer`}
                            onClick={() => navigate("/register")}>
                            Sign Up</div>
                    </div>
                </nav>
                <main className="d-flex w-100 p-3">
                    <div className="wrapper d-none d-lg-block w-50">
                        <img src={Phone} alt="" />
                    </div>
                    <div className={`${styles.rwrappe} w-50 mt-5 pt-5 d-flex flex-column justify-content-between ${styles.wrapperNavText}`}>
                        <h1 className="text-secondary fw-bold text-wrap">
                            Awesome App for Saving <span className={`${styles.textBlue}`}>Time.</span>
                        </h1>
                        <p className="text-secondary fw-bold text-wrap">We bring you a mobile app for banking problems that
                            oftenly wasting much of your times.</p>
                        <div className={`${styles.buttonRegs} ${styles.rwrappe} pointer w-25 text-center text-white fw-bold p-4`}
                            onClick={() => navigate("/register")}>Try for free</div>
                        <div>
                            <p className="text-secondary d-lg-block d-none">Available on</p>
                            <div className="wrapperImg d-lg-flex d-none">
                                <img src={PS} alt="" className='me-3' />
                                <img src={AppStore} alt="" />
                            </div>
                        </div>

                    </div>
                </main>
            </section>
            <section className={`p-lg-5 p-3 py-5 landing-2 ${styles.con2}`}>
                <div className="wrapper px-3 w-100 d-flex flex-wrap d-flex justify-content-between">
                    <img src={MS} alt="" />
                    <img src={Dropbox} alt="" />
                    <img src={Hnm} alt="" />
                    <img src={Airbnb} alt="" />
                    <img src={Canon} alt="" />
                    <img src={Dell} alt="" />
                </div>
            </section>
            <section className={`p-lg-5 p-3 py-5 landing-3 bg-light`}>
                <h1 className={`${styles.textBlue} fw-bold text-center`}>
                    About <span className={`text-secondary`}>The Application.</span>
                </h1>
                <p className="text-secondary text-center mt-3">We have some great features
                    from the application and it’s totally free to use by all users around the world.</p>
                <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center p-3">
                    <div className={`bg-white p-5 ${styles.Card} d-flex flex-column justify-content-between me-lg-3`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={Phonecard} alt="" />
                        </div>
                        <h5 className="text-secondary fw-bold text-center">24/7 Support</h5>
                        <p className="text-secondary text-center">We have 24/7 contact support
                            so you can contact us whenever you want and we will respond it.</p>
                    </div>
                    <div className={`bg-white p-5 ${styles.Card} d-flex flex-column justify-content-between my-3 my-lg-0`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={Padlock} alt="" />
                        </div>
                        <h5 className="text-secondary fw-bold text-center">Data Privacy</h5>
                        <p className="text-secondary text-center">We make sure your
                            data is safe in our database and we will encrypt any data you submitted to us.</p>
                    </div>
                    <div className={`bg-white p-5 ${styles.Card} d-flex flex-column justify-content-between ms-lg-3`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={Download} alt="" />
                        </div>
                        <h5 className="text-secondary fw-bold text-center">Easy Download</h5>
                        <p className="text-secondary text-center">Zwallet is 100% totally free to use it’s
                            now available on Google Play Store and App Store.</p>
                    </div>
                </div>
            </section>
            <section className={`p-lg-5 p-3 py-5 landing-4 ${styles.con2}`}>
                <div className="wrapper px-lg-3 d-flex w-100">
                    <div className="wrapper d-none d-lg-block w-50">
                        <img src={Phone} alt="" />
                    </div>
                    <div className={`w-50 ${styles.rwrappe} ${styles.wrapperTextL3} d-flex flex-column justify-content-between`}>
                        <h1 className={`text-secondary ${styles.textNeutral} fw-bold`}> All The <span className={`${styles.textBlue}`}>Great</span> Zwallet Features.</h1>
                        <div className={`${styles.fearureCrad} bg-white p-3 mb-3`}>
                            <p className={`text-secondary fw-bold ${styles.textNeutral}`}>1. Small Fee</p>
                            <p className={`text-secondary ${styles.textNeutral}`}>We only charge 5% of every success transaction done in Zwallet app.</p>
                        </div>
                        <div className={`${styles.fearureCrad} bg-white p-3 mb-3`}>
                            <p className={`text-secondary fw-bold ${styles.textNeutral}`}>2. User Friendly</p>
                            <p className={`text-secondary ${styles.textNeutral}`}>Zwallet come up with modern and sleek design and not complicated.</p>
                        </div>
                        <div className={`${styles.fearureCrad} bg-white p-3`}>
                            <p className={`text-secondary fw-bold ${styles.textNeutral}`}>3. Secured Data</p>
                            <p className={`text-secondary ${styles.textNeutral}`}>Your data is secured properly in our system and it’s encrypted.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`p-lg-5 py-5 p-3 landing-5 bg-light`}>
                <h1 className={`text-secondary ${styles.textNeutral} fw-bold text-center`}>
                    What Users are <span className={`${styles.textBlue}`}>Saying.</span>
                </h1>
                <p className="text-secondary text-center mt-3">We have some great features
                    from the application and it’s totally free to use by all users around the world.</p>
                <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center p-3">
                    <div className={`bg-white p-5 ${styles.Card} d-flex flex-column justify-content-between me-lg-3`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={UserImage} alt="" />
                        </div>
                        <h5 className="text-secondary fw-bold text-center mt-2">Nanang Ismail</h5>
                        <p className="text-secondary text-center">“I use this app since 2 years ago and this is
                            the best app that I’ve ever use in my entire life”</p>
                    </div>
                    <div className={`bg-white p-5 ${styles.Card} d-flex flex-column justify-content-between my-lg-0 my-3`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={UserImage} alt="" />
                        </div>
                        <h5 className="text-secondary fw-bold text-center mt-2">Nono Hartono</h5>
                        <p className="text-secondary text-center">“I use Zwallet to manage all financial needs.
                            It’s super easy to use and it’s 100% free app”</p>
                    </div>
                    <div className={`bg-white p-5 ${styles.Card} d-flex flex-column justify-content-between ms-lg-3`}>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={UserImage} alt="" />
                        </div>
                        <h5 className="text-secondary fw-bold text-center mt-2">Rita Ratatuli</h5>
                        <p className="text-secondary text-center">“Since I’m using this app,
                            I’m not going to move to another similar app. Thank you Zwallet!”</p>
                    </div>
                </div>
            </section>
            <footer className={`${styles.conFooter} p-lg-5 p-3 d-flex flex-column justify-content-lg-between`}>
                <h2 className="text-white fw-bold">Zwallet</h2>
                <div className="wrapper w-25 d-none d-lg-block">
                    <p className="text-white">Simplify financial needs and saving much time in banking needs with one single app.</p>
                </div>
                <div className="d-flex w-100 justify-content-between">
                    <p className="text-white d-none d-lg-block">2020 Zwallet. All right reserved.</p>
                    <p className="text-white d-block d-lg-none">2020 Zwallet.</p>
                    <p className="text-white d-none d-lg-block">+62 5637 8882 9901</p>
                    <p className="text-white">contact@zwallet.com</p>
                </div>
            </footer>
        </main>
    )
}

export default Landing