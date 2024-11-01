
export default function Footer(){
    return(
     <div className="flex bg-gray-100 h-56 justify-evenly items-center m-2 w-full">
        <ul>
            <li className="text-2xl font-bold">Core Courses</li>
            <li>Programming Fundamentals</li>
            <li>Web 2 using NextJS</li>
            <li>Earn as you Learn</li>

        </ul>
        <ul >
            <li className="text-2xl font-bold m-2">Advanced Courses</li>
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing </li>
            <li>Artifical Intelligence and Deep Leanring</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
        </ul>
        <ul>
            <li className="text-2xl font-bold m-2">Socail links</li>
            <li>education@governorsindh.com</li>
        </ul>
     </div>
    )
}