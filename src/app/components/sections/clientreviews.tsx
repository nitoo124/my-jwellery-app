"use client"
import Slider from "react-slick";
import Image from 'next/image';
import Button from '../common/button';

const data = [
    {
        image: '/client-slider/client1.jpg',
        name: 'Client1',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error'
    },
    {
        image: '/client-slider/client2.jpg',
        name: 'Client2',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error'
    },
    {
        image: '/client-slider/client3.jpg',
        name: 'Client3',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni autem eaque error'
    },
];

function Clientreviews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-xl mx-auto bg-black text-zinc-300 p-10">
            <div>
                <h2 className="capitalize text-shadow-lg font-bold text-4xl px-4 text-center" >
                    Clients Review
                </h2>
                <p className="mt-2 p-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quos accusantium
                    repudiandae distinctio
                    <br />
                    harum ipsum reprehenderit ipsam consectetur sunt aliquam?
                </p>
            </div>
            <div className="mt-5" >
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="shadow-light bg-black h-[450px] px-5 text-zinc-300 rounded-xl">
                            <section className="rounded-t-xl bg-zinc-300 flex justify-center items-center h-56">
                                <Image
                                    className="rounded-full"
                                    src={item.image}
                                    alt={item.name}
                                    width={150}
                                    height={150}
                                    loading="lazy"
                                />
                            </section>

                            <section className="flex flex-col justify-center items-center gap-4 p-4">
                                <h3 className="mt-2 px-3 text-2xl text-shadow-lg font-bold">{item.name}</h3>
                                <p className="text-center">{item.detail}</p>
                                <Button text="Read More" bg="bg-zinc-300" textcolor="text-black" />
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Clientreviews;
