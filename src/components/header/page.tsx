import Navbar from "../navbar/page";

export default function Header()
{
    return(
        <div>
            {/* <h1>Header page</h1> */}
            <Navbar />
        </div>
    )
}


// export default async function Page() {
//     const file = await fs.readFile(process.cwd() + '/components/Featured.json', 'utf8');
//     console.log(process.cwd());
//     const data = JSON.parse(file);
        //   <div className='flex gap-10'>
        //     {data.map(item=>{
        //       return(
        //         <div key={item.id}>
        //           <h1>{item.name}</h1>
        //           <img src={item.url} alt='not found'/>
        //           <h3>{item.cost}</h3>
        //         </div>
        //         //<div key={item.id}>{item.name}</div>
        //       )
        //     })}
        //   </div>
//   }
  