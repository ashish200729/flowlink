interface pageProps {
    params: {
        credentialId: string;
    }
}

const page =async ({ params }: pageProps) => {
    const { credentialId } = await params;
    return <div>credentials id page {credentialId}</div>
}

export default page;