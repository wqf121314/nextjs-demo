import {NextResponse} from "next/server";
import db from "@/db";

interface IParams {params:{id:string}}

//DELETE /api/articles/:id
export async function DELETE(req: Request,{params}:IParams) {
    await db.update(({posts})=>{
       const idx= posts.findIndex(post => post.id===params.id);
       posts.splice(idx, 1);
    })
    return NextResponse.json({
        code:0,
        message:"Success",
    })
}

//PATCH /api/articles/:id
export async function PATCH(req: Request, {params}:IParams) {
    const data=await req.json();
    let idx=-1;
    await db.update(({posts})=>{
        idx= posts.findIndex(post => post.id===params.id);
        posts[idx]={...posts[idx],...data}
    })
    return NextResponse.json({
        code:0,
        message:"Success",
        data:db.data.posts[idx]
    })
}

//GET /api/articles/:id
export async function GET(req: Request, {params}:IParams) {
    return NextResponse.json({
        code:0,
        message:"Success",
        data:db.data.posts.find(post=>post.id===params.id)
    })
}
