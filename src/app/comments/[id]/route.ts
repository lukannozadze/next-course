
import { redirect } from "next/navigation";
import { comments } from "../data";

type Params = {
    params:{
        id:string
    }
}

export async function GET(_request:Request, {params}:Params  ){
    if(parseInt(params.id) > comments.length){
        redirect('/comments');
    }
    const comment = comments.find(comm => comm.id === parseInt(params.id))
    return  Response.json(comment);
}

export async function PATCH(request:Request, {params}:Params){
   
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    comments[index].text = text;

    return  Response.json(comments[index]);
}

export async function DELETE(request:Request, {params}:Params  ){
   
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    const deletedComment = comments[index];
    comments.splice(index,1);
    return  Response.json(deletedComment);
}