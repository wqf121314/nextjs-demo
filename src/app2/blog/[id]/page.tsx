import {Card} from 'antd'
import {data} from "@/data";

interface IParams{params:{id:string}}
export async function generateMetadata({ params }:IParams) {
    return {
        title: `Blog Detail - ${params.id}`,
    }
}

function Page({params}: IParams) {
    const item=data.find(item=>item.id===+params.id )
    return (
        <Card title={item?.title} bordered={false}>
            <p>{item?.body}</p>
        </Card>
    );
}

export default Page;
