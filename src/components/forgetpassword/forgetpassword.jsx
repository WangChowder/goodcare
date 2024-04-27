import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Background from '../../asset/images/userlogin/background.png'
import '../forgetpassword/forgetpassword.css'
import toast, { Toaster } from 'react-hot-toast';

const ForegetPassword = () => {
    const [account, setAccount] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdcheck, setPwdcheck] = useState(false)
    const [fail, setFail] = useState(false)
 


    const Dorestart = async (e) => {
        console.log(account, email)
        // e.preventDefault()
        await axios.post('http://localhost:8000/member/forget', { account, email },
            { headers: { "Content-Type": "application/json" } }
        )
            .then((response => {
                if (response.data === "account or email no correct") {

                    setFail(true)
                    // window.location.href=('/userforget')
                } else if (response.data === "forget ok") {
                    setFail(false)
                    setPwdcheck(true)
                }
            }))
    }


    const Dofinal = async () => {
        await axios.post('http://localhost:8000/member/reforget', { account, email,pwd },
            { headers: { "Content-Type": "application/json" } }
        )
            .then((response => {
                if (response.data === "restart err") {
                    toast.error('請在試一次',{style: {
                        minWidth: '200px', 
                        borderRadius: '300px', 
                        fontSize: '20px', 
                        padding: '10px', 
                      }})
                } else {
                    toast.success('密碼已更新，請重新登入',{style: {
                        minWidth: '200px', 
                        borderRadius: '300px', 
                        fontSize: '20px', 
                        padding: '10px', 
                      }})
                    setTimeout(() => {
                        window.location.href=('/userlogin')
                    },1500)
                    
                }

            }))
    }


    return (
        <React.Fragment>
            <Toaster/>
            <div style={{
                backgroundImage: `url(${Background})`,
                width: '100%',
                backgroundSize: 'cover'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="d-flex justify-content-center mb-5 mt-5">
                            <div className="forgotpassword1">
                                <form>
                                    <h2 className="d-flex justify-content-center  mt-3">忘記密碼？</h2>
                                    <h4 className="d-flex justify-content-center mb-2">______________________________</h4>
                                    <br />
                                    <br />
                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <i className="fa-solid fa-circle-user"></i>&emsp;<input type="text" className="account" disabled={pwdcheck ? 1 : 0}
                                            id="Inputaccount" value={account} onChange={(e) => setAccount(e.target.value)} placeholder="請輸入帳號" />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <i className="fa-solid fa-envelope"></i>&emsp;<input type="text" className="account" disabled={pwdcheck ? 1 : 0}
                                            id="Inputaccount" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="請輸入電子信箱" />
                                    </div>
                                    <div className={pwdcheck ? "d-flex justify-content-center align-items-center mb-3" : "hide"}>
                                        <i className="fa-solid fa-envelope"></i>&emsp;<input type="password" className="account" required
                                            id="Inputaccount" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="請輸入新密碼" />
                                    </div>
                                    <p className={fail ? "forgetpasswordshow" : "hide"}>帳號或信箱錯誤</p>
                                    <br />
                                    <br />
                                    <div className='d-flex  justify-content-center'>

                                        <button type="button" className={pwdcheck ? "hide" : "forgotpassword"} onClick={Dorestart}>
                                            下一步
                                        </button>
                                        <button type="button" className={pwdcheck ? "forgotpassword" : "hide"} onClick={Dofinal}>
                                            重設密碼
                                        </button>
                                    </div>
                                </form>
                                <br />
                                <div class="d-flex justify-content-center mt-4">
                                    <a href="/UserRegister">
                                        <h5>註冊帳號</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </React.Fragment>
    )
}
export default ForegetPassword