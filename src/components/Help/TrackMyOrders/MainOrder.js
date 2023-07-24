import React, { useState } from 'react'
import Faq from '../Faq';

const MainOrder = () => {

    const [number, setNumber] = useState('');
    // const [orderId, setOrderId] = useState();
    const [checked, setChecked] = useState(true);
    const [checked1, setChecked1] = useState(false);

    const handle_Check_Order = () => {
        if (!checked) {
            setChecked(true);
            setChecked1(false);
        }
    };
    const handle_Check_Number = () => {
        if (!checked1) {
            setChecked1(true);
            setChecked(false);
        }
    };


    const isInputEmpty = !number.trim();
    const buttonColor = isInputEmpty ? '#aaa' : '#034D83';
    const handle_track = (e) => {
        setNumber(e.target.value)
    }
    const handle_click = () => {
        alert("Page Not Found")
    }

    return (
        <main className="tracking-main-content">
            <div className="tracking-container">
                <h1 className="page-title">Track your shipment</h1>
                <div className="order-search-container">
                    <div className="search-by-label">Search by</div>
                    <div className="track-radio-btns-container">
                        <div className="track-radio-btn">
                            <input type="checkbox" checked={checked} onChange={handle_Check_Order} defaultChecked />
                            <label htmlFor="orderId" className='main-lable-fix'>Order ID</label>
                        </div>
                        <div className="track-radio-btn">
                            <input type="checkbox" checked={checked1} onChange={handle_Check_Number} />
                            <label htmlFor="awbNumber" className='main-lable-fix'>AWB Number</label>
                        </div>
                    </div>
                    <div class="track-form-container">
                        {checked &&
                            <>
                                <div class="track-form-input-container ">
                                    <label className='main-lable-fix1'>Order ID <span class="input-required">*</span></label>
                                    <input class="track-form-input" placeholder="Enter order id" onChange={handle_track} />
                                </div>
                                <div class="track-form-input-container ">
                                    <label className='main-lable-fix1'>Mobile Number <span class="input-required">*</span></label>
                                    <input class="track-form-input" type="number" placeholder="Enter mobile number" />
                                </div>
                            </>
                        }
                        {checked1 &&
                            <div class="track-form-input-container">
                                <label className='main-lable-fix1'>AWB Number <span class="input-required">*</span></label>
                                <input class="track-form-input1" placeholder="Enter AWB number" onChange={handle_track} />
                            </div>
                        }

                        <div class="track-form-input-container">
                            <button disabled={isInputEmpty}
                                style={{ backgroundColor: buttonColor }} onClick={handle_click}>Track</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainOrder
