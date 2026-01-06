interface pageProps {
    params: {
        workflowId: string;
    }
}

const page =async ({ params }: pageProps) => {
    const { workflowId } = await params;
    return <div>workflow id page {workflowId}</div>
}

export default page;