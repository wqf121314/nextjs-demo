import React from 'react';
import {photos} from "@/data/photos";
import Image from "next/image";

function Page({params}:{params:{id:string}}){
   const photo= photos.find(item=> item.id=== +params.id)!
    return (
        <div className='container mx-auto pt-8'>
            <Image
                src={photo?.src}
                alt= {photo?.alt}
                width={400}
                height={400}
                className="rounded-lg block mx-auto"/>
            <div className='border-2 border-dashed border-gray-500 rounded-lg p-3 mt-5'>
                <p>
                    <strong>Title:</strong> {photo?.alt}
                </p>
                <p>
                    <strong>Price:</strong> {photo?.price}
                </p>
                <p>
                    <strong>Description:</strong> {photo?.alt} 11111
                </p>
            </div>
        </div>
    );
}

export default Page;
