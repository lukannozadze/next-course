import { comments } from "../data";

type Params = {
    params:{
        id:string
    }
}

export async function GET(_request:Request, {params}:Params  ){
    const comment = comments.find(comm => comm.id === parseInt(params.id))
    return  Response.json(comment);
}

export async function PATCH(request:Request, {params}:Params  ){
   
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    comments[index].text = text;

    return  Response.json(comments[index]);
}