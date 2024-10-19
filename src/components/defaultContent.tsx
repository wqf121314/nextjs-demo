"use client"
import React from 'react';
import Image, {StaticImageData} from "next/image";
interface IProps{
    imgUrl: StaticImageData;
    altText: string;
    title: string;
    content:string;
}
export default function DefaultContent(props:IProps) {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 -z-10'>
                <Image src={props.imgUrl} fill style={{objectFit: 'cover'}} alt={props.altText}/>
                <div className='absolute inset-0 bg-gradient-to-b from-blue-300'></div>
            </div>
            <div className='flex justify-center pt-48'>
                <h1 className='text-white text-6xl inset-1'>{props.title}</h1>
            </div>
            <div className='flex justify-center pt-10'>
                <h1 className='text-white text-3xl'>{props.content}</h1>
            </div>
        </div>
    );
}
