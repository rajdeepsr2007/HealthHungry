import { getSession, signOut } from "next-auth/client";


export default function Home() {
    return (
      <h1>Home</h1>
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
  }else{
    return{
      redirect : {
        destination : '/recipes',
        permanent : false
      }
    }
  }

  return {props : {}};
}

