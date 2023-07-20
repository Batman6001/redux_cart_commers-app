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
                    <h1>SHOES</h1>
                </div>

                <div className="forallcontent">
                    <div className="accordion">
                        <input
                            id="ac-1"
                            
                            type="radio"
                            checked={activeAccordion === 1}
                            onChange={() => handleAccordionToggle(1)}
                        />
                        <label htmlFor="ac-1">WHAT ARE FLATHEADS UPPERS MADE OF?</label>
                        <article style={{ display: activeAccordion === 1 ?   'block' : 'none' }}>
                            Flatheads uppers are made of natural bamboo and polyester threads that are knit to give them a ridiculously breathable form.
                        </article>
                        <hr />
                    </div>
                    {/* Add more accordion items here as needed */}
                    <div class="forallcontent">
                        <input id="ac-2" name="accordion-1" type="radio" />
                        <label for="ac-2">WHAT ARE FLATHEADS SOLES AND INSOLES MADE OF?</label>
                        <article>
                            We could tell you that our soles are made of EVA and are shockproof, flexible, water-resistant &amp; lightweight. Or that our insoles are made of cushiony PU to distribute the weight of your body evenly. But what we really mean is that they are made of ridiculously comfortable stuff!
                        </article>
                        <hr />
                    </div>
                </div>
                {/*                         
                <div class="forallcontent">
                    <input id="ac-1" name="accordion-1" type="radio" checked />
                    <label for="ac-1">WHAT ARE FLATHEADS UPPERS MADE OF?</label>
                    <article>
                        Flatheads uppers are made of natural bamboo and polyester threads that are knit to give them a ridiculously breathable form.
                    </article>
                </div>

                <div class="forallcontent">
                    <input id="ac-2" name="accordion-1" type="radio" />
                    <label for="ac-2">WHAT ARE FLATHEADS SOLES AND INSOLES MADE OF?</label>
                    <article>
                        We could tell you that our soles are made of EVA and are shockproof, flexible, water-resistant &amp; lightweight. Or that our insoles are made of cushiony PU to distribute the weight of your body evenly. But what we really mean is that they are made of ridiculously comfortable stuff!
                    </article>
                </div> */}
            </div>
        </>
    )
}

export default Faq
