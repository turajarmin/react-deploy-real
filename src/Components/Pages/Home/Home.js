import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <div className="container mt-4 bg-dark p-5 text-white">
                <h1 className="text-text-capitalize">page-home</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores ipsam enim qui. Incidunt, voluptatem, dolores adipisci eius natus repellendus laboriosam sunt vel laborum ullam amet ratione libero ex ad.
                    Assumenda odit error laborum provident harum impedit libero fuga excepturi id ullam neque quia, voluptate obcaecati quod blanditiis sint hic magni expedita, quas culpa? Facere quis possimus tempore suscipit laudantium.
                </p>
                <Link className="btn btn-success mx-2 my-2" to="/posts">posts</Link>
                <Link className="btn btn-success mx-2 my-2" to="/users">users</Link>
            </div>
        </>
     );
}
 
export default Home;