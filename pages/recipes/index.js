import { getSession } from "next-auth/client";

function Recipes(props){
    return(
        <h1>Recipes</h1>
    )
}

export async function getServerSideProps(context){
    const session = await getSession({ req : context.req });
  
    if( !session ){
      return{
        redirect : {
          destination : '/auth',
          permanent : false
        }
      }
    }
  
    return {props : {}};
  }

export default Recipes;