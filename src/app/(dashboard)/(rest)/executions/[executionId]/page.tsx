interface pageProps {
    params: {
        executionId: string;
    }
}

const page =async ({ params }: pageProps) => {
    const { executionId } = await params;
    return <div>execution id page {executionId}</div>
}

export default page;