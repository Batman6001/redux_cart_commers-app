import React, { useState } from 'react'
import './HelpStyle.css'

const Faq = () => {

    const [activeAccordion, setActiveAccordion] = useState();

    const handleAccordionToggle = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };
    console.log(activeAccordion)
    return (
        <>
            <div className="main-div">
                <div className="content-cenrer">
                    <h1>FREQUENTLY ASKED QUESTIONS</h1><br />
                </div>
                <h1 class='title'>SHOES</h1>

                <div className="forallcontent">
                    <div className="accordion">
                        <input
                            id="ac-1"
                            type="radio"
                            checked={activeAccordion === 1}
                            onChange={() => handleAccordionToggle(1)}
                        />
                        <label htmlFor="ac-1">WHAT ARE FLATHEADS UPPERS MADE OF?</label>
                        <article style={{ display: activeAccordion === 1 ? 'block' : 'none' }}>
                            Flatheads uppers are made of natural bamboo and polyester threads that are knit to give them a ridiculously breathable form.
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-2" name="accordion-1" type="radio" />
                        <label htmlFor="ac-2">WHAT ARE FLATHEADS SOLES AND INSOLES MADE OF?</label>
                        <article>
                            We could tell you that our soles are made of EVA and are shockproof, flexible, water-resistant &amp; lightweight. Or that our insoles are made of cushiony PU to distribute the weight of your body evenly. But what we really mean is that they are made of ridiculously comfortable stuff!
                        </article>
                        <hr />
                    </div>
                    <div className="forallcontent">
                        <input id="ac-3" name="accordion-1" type="radio" />
                        <label for="ac-3">ARE THE INSOLES DETACHABLE?</label>
                        <article>
                            Yes! You can even swap them for custom/orthopedic insoles. But with insoles THIS ridiculously soft, we doubt you'd remove them anyway.
                        </article>
                        <hr />
                    </div>
                    <div className="forallcontent">
                        <input id="ac-4" name="accordion-1" type="radio" />
                        <label for="ac-4">HOW DURABLE ARE MY FLATHEADS?</label>
                        <article>
                            Flatheads are equipped to get you through the grind. 14+ hours and going strong! However, we recommend casual wear. Avoid rough use (training/gymming/trekking).
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-5" name="accordion-1" type="radio" />
                        <label for="ac-5">HOW LONG WILL A PAIR OF FLATHEADS LAST ME?</label>
                        <article>
                            Our shoes are designed to be moisture, tear, and weather resistant. With good care, they can last over 18 months. But a bond with us? Now that lasts forever (excuse the cringe).
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-6" name="accordion-1" type="radio" />
                        <label for="ac-6">HOW COMFORTABLE ARE MY FLATHEADS?</label>
                        <article>
                            Imagine that you were walking on a cloud. Now that's what a Flatheads' shoe feels like. Yes, we're THAT ridiculously comfortable.
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-7" name="accordion-1" type="radio" />
                        <label for="ac-7">ARE FLATHEADS WEATHER RESISTANT?</label>
                        <article>
                            Call us Vivaldi because we're all about the four seasons. So yes, we last through all of them.
                        </article>
                        <hr />
                    </div>
                    <div className="forallcontent">
                        <input id="ac-8" name="accordion-1" type="radio" />
                        <label for="ac-8">WHAT COLOURS DO FLATHEADS COME IN?</label>
                        <article>
                            Just the ones you want. Refer to the product pages below to see our complete range:
                            <ul>
                                <li><a href="#!">Troos</a></li>
                                <li><a href="#!">Aurea</a></li>
                                <li><a href="#!">Ellipsis</a></li>
                                <li><a href="#!">Kapow 2.0</a></li>
                            </ul>
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-9" name="accordion-1" type="radio" />
                        <label for="ac-9">WILL THE COLOUR OF MY FLATHEADS BLEED OR FADE?</label>
                        <article>
                            We like to look sharp, always. Our uppers have been tested for colorfastness &amp; fade resistance. We recommend occasional cold water washes with soft detergents!
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-10" name="accordion-1" type="radio" />
                        <label for="ac-10">ARE FLATHEADS ECO-FRIENDLY?</label>
                        <article>
                            Like most high-end shoes, we are made of modern materials. However, we respect sustainability and have launched our latest lines made of natural bamboo uppers, the Troos and Aurea.
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-11" name="accordion-1" type="radio" />
                        <label for="ac-11">CAN FLATHEADS BE USED FOR ATHLETIC PURPOSES LIKE RUNNING, GYM, AND TRAINING?</label>
                        <article>
                            Flatheads are all-day sneakers, suited to get you through the grind. We promise you 14+ hours of comfort but don't recommend rough usage for sports, gym, running, etc.
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-12" name="accordion-1" type="radio" />
                        <label for="ac-12">WILL I SWEAT A LOT IN FLATHEADS?</label>
                        <article>
                            Even the Summer of '69 couldn't have your feet sweating in a Flatheads. Our shoes are ridiculously breathable and keep your feet cool in the hottest summers.
                        </article>
                        <hr />
                    </div>

                    <div className="forallcontent">
                        <input id="ac-13" name="accordion-1" type="radio" />
                        <label for="ac-13">WHY ARE FLATHEADS EXPENSIVE?</label>
                        <article>
                            We believe in making shoes of substance, for a man of substance. Our quality is at par with international brands, having passed over 35 quality tests - which not many Indian brands can do.
                            We promise that we are worth every penny you spend. Give us a try.
                        </article>
                        <hr />
                    </div>
                </div>

                <h2 className="title">PAYMENTS</h2>

                <div className="forallcontent">
                    <input id="ac-14" name="accordion-1" type="radio" checked />
                    <label for="ac-14">WHAT ALL PAYMENT METHODS DO YOU ACCEPT?</label>
                    <article>
                        You can pay using any of the following payment methods:
                        <ul>
                            <li>Net Banking</li>
                            <li>Cash on Delivery</li>
                            <li>Credit/Debit Cards</li>
                            <li>UPI</li>
                            <li>Wallets - Payzapp, Mobikwik, Ola Money, Airtel Money, Freecharge</li>
                        </ul>
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-15" name="accordion-1" type="radio" />
                    <label for="ac-15">CAN I PAY COD (CASH ON DELIVERY)?</label>
                    <article>
                        Yes, cash on delivery is available. Here are the terms:
                        <ul>
                            <li>In case of COD orders, order confirmation will be required from the recipient over call. Orders will not be dispatched until phone confirmation is completed.</li>
                            <li>COD payment can be accepted by cash or credit/debit card. E-vouchers, store credit or foreign currency cannot be accepted as mode of payment.</li>
                            <li>For COD orders refunds will be provided via store credit equivalent to the total order value. We cannot refund the amount by any other method, such as UPI or bank transfer. Shipping fee for COD order is non-refundable.</li>
                            <li>Any dispute arising due to COD is subject to the jurisdiction of Bengaluru, Karnataka.
                            </li>
                        </ul>
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-16" name="accordion-1" type="radio" />
                    <label for="ac-16">CAN I BUY FLATHEADS OUTSIDE INDIA?</label>
                    <article>
                        Currently, Flatheads are made exclusively for purchase within India. However, we think the world needs to see what we're made of, and are working on international shipping!
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-17" name="accordion-1" type="radio" />
                    <label for="ac-17">MONEY GOT DEDUCTED FROM MY CARD/ACCOUNT BUT THE ORDER WAS NOT CONFIRMED. CAN YOU PLEASE HELP?</label>
                    <article>
                        The site is end-to-end secured so don't worry; your money is in safe hands (we promise we aren't a Nigerian Prince scam). You can send a mail to rescue@flatheads.in with your order ID and we will get back to you within 24 hours.
                    </article>
                    <hr />
                </div>

                <h2 className="title">SIZING</h2>

                <div className="forallcontent">
                    <input id="ac-18" name="accordion-1" type="radio" checked />
                    <label for="ac-1">I HAVE WIDE FEET. WHAT DO I DO?</label>
                    <article>
                        You know what they say about big feet. You've got a big heart, of course. Jokes aside, we’ve got you covered. Buy one size larger than your usual size.
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-19" name="accordion-1" type="radio" />
                    <label for="ac-2">I DON'T KNOW MY SIZE, HOW DO I BUY THESE AWESOME SNEAKERS?</label>
                    <article>
                        Check out our size chart on the product page. We follow the India/UK size charts.
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-20" name="accordion-1" type="radio" />
                    <label for="ac-20">DO YOU MAKE HALF SIZES?</label>
                    <article>
                        No, but you can size up to the next size, and it will fit you perfectly. Flatheads uppers are flexible and adapt to your feet like socks. Why go half when you can go whole!
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-21" name="accordion-1" type="radio" />
                    <label for="ac-22">I WEAR X BRAND, WHAT SIZE FLATHEADS WILL FIT ME?</label>
                    <article>
                        Forgive the bad pun but, X brand will soon become your Ex-brand because once you try the Flatheads life, there's no turning back! Refer to the size chart on the product page for your size.
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-23" name="accordion-1" type="radio" />
                    <label for="ac-23">DO YOU HAVE SIZES LARGER THAN INDIA/UK 12?</label>
                    <article>
                        Not yet, but we will soon!
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-24" name="accordion-1" type="radio" />
                    <label for="ac-24">DO YOU MAKE SIZES SMALLER THAN INDIA/UK 6?</label>
                    <article>
                        No, we don't make those sizes as of now.
                    </article>
                    <hr />
                </div>

                <div className="forallcontent">
                    <input id="ac-25" name="accordion-1" type="radio" />
                    <label for="ac-25">THE SHOES I WANT ARE OUT OF STOCK. WHAT DO I DO?</label>
                    <article>
                        Our limited-edition shoes are in much demand and go out of stock quickly! We'd hate for you to miss out on our shoes, so drop us a mail at hey@flatheads.in so we can notify you when we're back in stock!
                    </article>
                    <hr />
                </div>
                <h2 class="title">MASKS</h2>

                <div class="forallcontent">
                    <input id="ac-26" name="accordion-1" type="radio" checked />
                    <label for="ac-26">ARE FLATHEADS MASKS SUITABLE FOR EVERYDAY WEAR?</label>
                    <article>
                        Yes, Flatheads KN95 masks can be worn everyday - they protect you from air pollution (particulate matter PM2.5, PM10).
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-27" name="accordion-1" type="radio" />
                    <label for="ac-27">ARE FLATHEADS MASKS REUSABLE?</label>
                    <article>
                        Flatheads masks can be reused for up to 40 hours wearing time. That's more than a month if you wear them for 1 hour a day! Post that, we recommend discarding the mask and purchasing another one.
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-28" name="accordion-1" type="radio" />
                    <label for="ac-28">ARE FLATHEADS MASKS WASHABLE?</label>
                    <article>
                        Washing your mask reduces its air filtration effectiveness. Not recommended!
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-29" name="accordion-1" type="radio" />
                    <label for="ac-29">CAN FLATHEADS MASKS BE SHIPPED ANYWHERE IN INDIA?</label>
                    <article>
                        Yes, we ship our masks anywhere in India.
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-30" name="accordion-1" type="radio" />
                    <label for="ac-30">CAN I RETURN THE MASKS IF I DON'T LIKE THEM?</label>
                    <article>
                        Sorry, we do not accept returns of the masks for hygiene &amp; safety purposes.
                    </article>
                    <hr />
                </div>

                <h2 class="title">SHIPPING & RETURNS</h2>

                <div class="forallcontent">
                    <input id="ac-31" name="accordion-1" type="radio" checked />
                    <label for="ac-31">HOW LONG DOES IT TAKE TO SHIP MY FLATHEADS?</label>
                    <article>
                        We know just how much you want your cool new sneakers, so we dispatch orders within 1 day. Orders placed on Friday post 2 p.m, are dispatched on the following Monday or the next working day.
                        <br /><br />
                        Our Delivery timelines are as follows:
                        <ul>
                            <li>Metros 2-4 days</li>
                            <li>Other cities 4-5 days</li>
                        </ul>
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-32" name="accordion-1" type="radio" />
                    <label for="ac-32">WHAT IF I RECEIVE A DAMAGED PRODUCT?</label>
                    <article>
                        Seeing that our shoes rest in impenetrable safes protected by guards of the highest calibre, highly unlikely. Send us a picture of the damaged shoe(s) along with your order ID at rescue@flatheads.in for an exchange!
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-33" name="accordion-1" type="radio" />
                    <label for="ac-33">WHAT IS THE RETURN POLICY?</label>
                    <article>
                        Flatheads shoes (except those bought on Clearance Sale) are eligible for returns if they are unused, undamaged &amp; clean with tags intact, within 7 days of receiving the order.
                        The Kapow 2.0 Chalk is only eligible for exchanges.
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-34" name="accordion-1" type="radio" />
                    <label for="ac-34">WHAT IS THE EXCHANGE POLICY?</label>
                    <article>
                        Exchange is applicable only for sizing and fit issues. The shoes (except those bought on Clearance Sale) should be unused, undamaged &amp; clean, with tags intact, within 7 days of receiving the order. Email us at rescue@flatheads.in with your order ID to initiate the exchange.
                    </article>
                    <hr />
                </div>

                <div class="forallcontent">
                    <input id="ac-35" name="accordion-1" type="radio" />
                    <label for="ac-35">WHAT IS THE RETURN/EXCHANGE PROCESS?</label>
                    <article>
                        Once you initiate a return/exchange, we'll confirm the pickup date &amp; time. Our delivery partners will pick up the order from you &amp; the shoes will be checked against our policies. On successful verification, an exchange/refund will be initiated.
                        For COD orders, refunds are provided via store credit equal to the total order value. We don't refund the amount by any other method, such as UPI or bank transfer. Shipping fee for COD order is non-refundable.
                    </article>
                    <hr />
                </div>

                <h2 class="title">SHOE CARE</h2>
                <div class="forallcontent">
                    <input id="ac-36" name="accordion-1" type="radio" checked />
                    <label for="ac-36">HOW DO I CLEAN MY FLATHEADS?</label>
                    {/* <article>
                        Simple, wipe with a clean damp cloth. For a deeper clean, wash with cold water &amp; gentle detergent. We recommend overnight soaking in cold water before washing.
                    </article> */}
                    <hr />
                </div>
                <p style={{ textAlign: 'center', margin: '4%' }}>Something else on your mind? Call us on +91 7899136414 to talk to our ridiculously friendly team!</p>
            </div>
        </>
    )
}

export default Faq
