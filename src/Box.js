import React from 'react'
import Card from './Card'

export default function Box() {
    const data = [
        { "title": "PHP TRAINING", "info": "Get professional training in PHP from fundamental aspects to leading edge subjects from our knowledgeable educators.", "images": "images/img1.png", "class": "card1 card" },
        { "title": "ANDROID TRAINING", "info": "Get professional training in PHP from fundamental aspects to leading edge subjects from our knowledgeable educators.", "images": "images/img2.png", "class": "card2 card" },
        { "title": "IOS TRAINING", "info": "Get professional training in PHP from fundamental aspects to leading edge subjects from our knowledgeable educators.", "images": "images/img3.png", "class": "card3 card" },
        { "title": "WEB DESIGNING", "info": "Get professional training in PHP from fundamental aspects to leading edge subjects from our knowledgeable educators.", "images": "images/img4.png", "class": "card4 card" },
        { "title": "ASP.NET TRAINING", "info": "Get professional training in PHP from fundamental aspects to leading edge subjects from our knowledgeable educators.", "images": "images/img5.png", "class": "card5 card" },
        { "title": "SEO TRAINING", "info": "Get professional training in PHP from fundamental aspects to leading edge subjects from our knowledgeable educators.", "images": "images/img6.png", "class": "card6 card" },
    ]
    return (
        <>
            <div className='container'>
                <div className="row">
                    {data.map((item) =>
                        <Card data={item} />
                    )}
                </div>
            </div>

        </>
    )
}
