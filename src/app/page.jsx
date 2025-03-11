import Image from "next/image";

export default function RootPage() {
    return (
        <>
            <center>
                <Image src="/pythsource.png" alt="PythSource Logo" width={125} height={125} />
                <h1>Work in Progress</h1>
                <h2><a href="https://git.pythsource.com">Git</a> • <a href="https://discord.gg/XBKYEQksdX">Discord</a> • <a href="https://www.youtube.com/@PythSource">YouTube</a> • <a href="https://status.pythsource.com">Uptime</a></h2>
                <h2><a href="mailto:contact@pythsource.com">contact@pythsource.com</a></h2>
            </center>
        </>
    )
}