import image from "../assets/images/brand/brand-2-7.png";
import { useEffect, useState } from "react";
import token from "@/data/token";
const { getToken } = token;

function login() {

    const [showOtp, setShowOtp] = useState(false);
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('')

    var formdata = new FormData();


    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };


    const sendOtp = (e) => {
        e.preventDefault();
        setShowOtp(true);
        formdata.append("mobile", number);

        fetch("https://6wv6aciiid.execute-api.ap-south-1.amazonaws.com/dev_v1/phone_otp/", requestOptions)
            .then((responce) => responce.json())
            .then((data) => {
                setMessage(data)
                // console.log(data);
            });
    }

    const onNumber = (e) => {
        setNumber(e.target.value);
    }

    return (
        <div className='container '>

            <div className="d-flex border border-danger rounded m-5 p-5">
                <div className='my-5 w-50 item-center'>
                    <img src={image.src} className='w-50' alt="login-img" />
                </div>
                <div className='my-5 w-50'>
                    <form>
                        <h3>Sign In</h3>
                        <div className="my-3">
                            <label>Mobile number</label>
                            <input
                                value={number}
                                type="number"
                                className="form-control"
                                placeholder="Enter number"
                                step='10'
                                onChange={onNumber}
                            />
                        </div>
                        <div className="d-grid my-5">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={sendOtp}>
                                Send OTP
                            </button>
                        </div>
                        {showOtp && <div className="my-5">
                            <span className="" >
                                {message.message}
                            </span>
                        </div>}
                        {showOtp && <div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter OTP"
                                    step='10'
                                />
                            </div>
                            <div className="d-grid my-5">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Verify OTP
                                </button>
                            </div>
                        </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}


export default login
