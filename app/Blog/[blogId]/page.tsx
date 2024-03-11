export default function blog({params}: {params: { blogId : string }}) {
    return (
        <>
            <h1>Blog {params.blogId}</h1>
        </>
    );
}