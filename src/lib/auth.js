import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("find-tutor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

  emailAndPassword:{
    enabled:true,
    
  },
  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  session:{
    cookieCache:{
      enabled:true,
      strategy:"jwt",
      //max 7days
      maxAge:7*24*60*60
    }
  },
  plugins:[
    jwt()
  ]
});



  // {user?<>
  //          <li>
  //           <Avatar>
  //       <Avatar.Image alt={user.name}src={user?.image} />
  //       <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
  //     </Avatar>
  //          </li>
  //          <li>
  //           <Button variant="danger" className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20">
  //                 LogOut
  //               </Button>
  //          </li>

  //          </>: <> <Link href="/login">
  //               <Button variant="primary" className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20">
  //                 Login
  //               </Button>
  //             </Link>
             
  //             <Link href="/register">

  //               <Button variant="tertiary" className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20">
  //                Register
  //               </Button>
  //             </Link>