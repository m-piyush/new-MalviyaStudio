import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const FAQ = [
    {
        id: 1,
        question: "When should I book my photography session?",
        answer: "We recommend booking 4–6 weeks in advance to secure your preferred date. However, during peak wedding or festive seasons, it's best to book 4–5 months ahead."

    },
    {
        id: 2,
        question: "What photography services do you provide?",
        answer: "We specialize in weddings, pre-weddings, engagements, portraits, baby shoots, events, and commercial photography."
    },
    {
        id: 3,
        question: "Are the final photos edited?",
        answer: "We provide both Edited and Original photos, all images are professionally retouched for color, lighting, and clarity to ensure they look their absolute best."
    },
    {
        id: 4,
        question: "Do you offer printed albums or photo books?",
        answer: "Yes, we offer high-quality prints and custom-designed photo albums as add-ons. They're perfect for preserving memories beautifully."
    },
    {
        id: 5,
        question: "How soon will I get my photos?",
        answer: "Final edited photos are typically delivered within 2–3 weeks. We’ll also keep you updated throughout the editing process."
    }
]



function FreqentAskQuestion() {
    return (
        <div className="w-full max-w-6xl mx-auto bg-red-200 p-6 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-2 ">
                {FAQ.map((item, index) => {
                    return (
                        <AccordionItem value={item.id} key={index}>
                            <AccordionTrigger className="text-2xl">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-xl">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}


            </Accordion>
        </div >
    );
}

export default FreqentAskQuestion;
