import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = [
    {
        id: 1,
        question: 'When should I book my photography session?',
        answer:
            "We recommend booking 4–6 weeks in advance to secure your preferred date. However, during peak wedding or festive seasons, it's best to book 4–5 months ahead.",
    },
    {
        id: 2,
        question: 'What photography services do you provide?',
        answer:
            'We specialize in weddings, pre-weddings, engagements, portraits, baby shoots, events, and commercial photography.',
    },
    {
        id: 3,
        question: 'Are the final photos edited?',
        answer:
            'We provide both Edited and Original photos, all images are professionally retouched for color, lighting, and clarity to ensure they look their absolute best.',
    },
    {
        id: 4,
        question: 'Do you offer printed albums or photo books?',
        answer:
            "Yes, we offer high-quality prints and custom-designed photo albums as add-ons. They're perfect for preserving memories beautifully.",
    },
    {
        id: 5,
        question: 'How soon will I get my photos?',
        answer:
            'Final edited photos are typically delivered within 2–3 weeks. We’ll also keep you updated throughout the editing process.',
    },
];

function FreqentAskQuestion() {
    return (
        <section className="w-full bg-muted py-20 px-4">
            <div className="max-w-6xl mx-auto rounded-lg shadow-xl p-6 sm:p-10 bg-card/90 text-card-foreground backdrop-blur-md">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brand mb-10">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                    {FAQ.map((item, index) => (
                        <AccordionItem
                            value={`faq-${item.id}`}
                            key={index}
                            className="rounded-xl bg-card text-card-foreground shadow-md border border-border transition-all duration-300 hover:shadow-lg"
                        >
                            <AccordionTrigger className="text-lg md:text-xl font-medium px-4 py-4 text-left text-foreground hover:text-brand">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base md:text-lg text-muted-foreground px-4 pb-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default FreqentAskQuestion;
