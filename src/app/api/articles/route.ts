
//GET /api/articles
import {NextRequest, NextResponse} from "next/server";
import db from "@/db";

export async function GET(req: NextRequest) {
    const  searchParams=req.nextUrl.searchParams;
    const pagenum=Number(searchParams.get('pagenum'))||1;
    const pagesize=Number(searchParams.get('pagesize'))||2;
    const query=searchParams.get('query')||"";
    const data=db.data.posts;
    let filterData= query?data.filter(item=>{
        const {id,...rest} = item;
        return Object.values(rest).some(value => String(value).toLowerCase().includes(query.toLowerCase()))
    }):data

    const total=filterData.length;

    const startIndex=(pagenum-1)*pagesize;
    const endIndex=Math.min(startIndex+pagesize,total);

    filterData=startIndex>=total?filterData:filterData.slice(startIndex,endIndex);
    return NextResponse.json({
        code: 0,
        message:"Success",
        data:filterData
    });
}

//POST /api/articles
export async function POST(req: Request) {
   const data=await req.json()
    await db.update(({posts})=>posts.unshift({
        id:Math.random().toFixed(36).slice(-8),
        ...data
    }))
    return NextResponse.json({
        code:0,
        message:"Success",
        data
    })
}
