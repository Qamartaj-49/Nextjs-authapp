export default function UserProfile ({params}:any) {

  return(
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1><br/>
         <hr/>
         <p className="text-4xl">Profile Page 
          &nbsp;<span className="p-2 rounded bg-orange-500">{params.id}</span></p>
     </div>


  )
}