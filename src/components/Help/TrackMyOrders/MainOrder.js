import React, { useState } from 'react'

const MainOrder = () => {

    const [checked, setChecked] = useState(false);
    // const [checkedTwo, setCheckedTwo] = useState(false);

    const handle_Check = () => {
        setChecked(!checked);
    };

    // const handle_Checkbox = () => {
    //     setCheckedTwo(!checkedTwo);
    // };

    return (
        <main className="tracking-main-content">
            <div className="tracking-container">
                <h1 className="page-title">Track your shipment</h1>
                <div className="order-search-container">
                    <div className="search-by-label">Search by</div>
                    <div className="track-radio-btns-container">
                        <div className="track-radio-btn">
                            {/* <input type="checkbox" checked={checked} onChange={handle_Check} defaultChecked /> */}
                            <label htmlFor="orderId">Order ID</label>
                        </div>
                        <div className="track-radio-btn">
                            {/* <input type="checkbox" id="awbNumber" name="trackRadio" value="awbNumber" /> */}
                            <label htmlFor="awbNumber">AWB Number</label>
                        </div>
                    </div>


                    {/* {checked && (
                            <div className='tracking-page-body-input'>
                                <label>Label:</label>
                                <input type="text" placeholder="Enter order id" />
                                <label>Label:</label>
                                <input type="text" placeholder="Enter mobile number" />
                            </div>
                        )} */}
                    {/* <button className='button-text'>Track</button> */}



                    <div class="track-form-container">
                        <div class="track-form-input-container orderid-search-container order-id-search">
                            <label>Order ID <span class="input-required">*</span></label>
                            <input class="track-form-input" name="orderId" id="order_id_input" placeholder="Enter order id" />
                        </div>
                        <div class="track-form-input-container orderid-search-container">
                            <label>Mobile Number <span class="input-required">*</span></label>
                            <input class="track-form-input" type="number" name="mobile" id="mobile_number_input" placeholder="Enter mobile number" />
                        </div>
                        {/* <div class="track-form-input-container awb-search-container hide">
                                <label>AWB Number <span class="input-required">*</span></label>
                                <input class="track-form-input" name="awb" id="awb_number_input" placeholder="Enter AWB number" />
                            </div> */}
                        <div class="track-submit-container">
                            <button class="track-submit-btn disabled" id="trackSubmitBtn">Track</button>
                        </div>
                    </div>
                    <div class="tracking-error hide"></div>
                    <div class="multiple-awb-container hide"></div>
                    {/* </div> */}
                    {/* </div> */}


                </div>
            </div>
        </main>

    )
}

export default MainOrder
